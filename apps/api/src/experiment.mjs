export function createExperimentModel(data, res, db) {
  if (!data || typeof data !== "object") {
    return res.code(400).send({ error: "Invalid request body" });
  }

  const { name, description } = data;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.code(400).send({ error: "Name is required" });
  }

  if (description !== undefined && typeof description !== "string") {
    return res.code(400).send({ error: "Description must be a string" });
  }

  const stmt = db.prepare(
    "INSERT INTO experiments(name, description) VALUES (?, ?)",
  );
  const info = stmt.run(name.trim(), description ?? null);

  return res.code(201).send({ status: "ok", id: info.lastInsertRowid });
}
