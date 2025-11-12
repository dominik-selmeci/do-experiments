export function isString(stringVal) {
  return stringVal && typeof stringVal === "string";
}

export function isNonEmptyString(stringVal) {
  return isString(stringVal) && stringVal.trim() !== "";
}

// YYYY-MM-DD
export function isDateString(dateStr) {
  return (
    typeof dateStr === "string" &&
    dateStr.length === 10 &&
    !isNaN(Date.parse(dateStr))
  );
}

export function formatDateYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function badRequest(res, errorMsg) {
  return res.code(400).send({ error: errorMsg });
}
