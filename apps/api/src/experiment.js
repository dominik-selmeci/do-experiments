import {
  isNonEmptyString,
  isString,
  isDateString,
  formatDateYYYYMMDD,
  badRequest,
} from "./utils.js";

export function createExperimentModel(data, res, db) {
  if (!data || typeof data !== "object")
    return badRequest(res, "Invalid request body");

  const { name, description, startAt, endAt } = data;

  // validations
  if (!isNonEmptyString(name)) return badRequest(res, "Name is required");
  if (!isString(description))
    return badRequest(res, "Description must be a string");
  if (!isDateString(startAt)) return badRequest("StartAt is not a date");
  if (!isDateString(endAt)) return badRequest(res, "EndAt is not a date");
  if (new Date(startAt) >= new Date(endAt))
    return badRequest(res, "End date needs to be later in time.");

  const stmt = db.prepare(
    "INSERT INTO experiments(name, description, start_at, end_at) VALUES (?, ?, ?, ?)",
  );
  const info = stmt.run(
    name.trim(),
    description.trim() ?? null,
    startAt,
    endAt,
  );
  const createdID = info.lastInsertRowid;

  return createExperimentLogs(
    { experimentID: createdID, fromDate: startAt, toDate: endAt },
    res,
    db,
  );
}

export function createExperimentLogs(
  { experimentID, fromDate, toDate },
  res,
  db,
) {
  let currentDate = new Date(fromDate);
  const scheduledDays = [];
  while (new Date(currentDate) <= new Date(toDate)) {
    scheduledDays.push({
      scheduledFor: formatDateYYYYMMDD(currentDate),
      experimentID,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const insertExperimentLog = db.prepare(
    "INSERT INTO experiment_logs (scheduled_for, experiment_id) VALUES (@scheduledFor, @experimentID)",
  );

  const insertMany = db.transaction((scheduledDays) => {
    for (const day of scheduledDays) insertExperimentLog.run(day);
  });
  insertMany(scheduledDays);

  return res.code(201).send({ status: "ok", id: experimentID });
}
