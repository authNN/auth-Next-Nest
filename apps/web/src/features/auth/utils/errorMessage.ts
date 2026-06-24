export function errorMessage(data: any) {
  return Array.isArray(data.errors)
    ? data.errors.join(", ")
    : data.errors || data.message;
}
