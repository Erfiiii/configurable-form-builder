export const textValidator = (
  value: string | number | null,
  required: boolean,
): string | null => {
  const stringValue = String(value ?? "").trim();

  if (required && !stringValue) {
    return "This field is required.";
  }

  if (!stringValue) return null; // not required and empty is fine

  if (!/^[a-zA-Z\s]+$/.test(stringValue)) {
    return "Only letters are allowed.";
  }

  return null;
};

export const numberValidator = (
  value: string | number | null,
  min: string | undefined,
  max: string | undefined,
  required: boolean,
): string | null => {
  const stringValue = String(value ?? "").trim();

  if (required && !stringValue) {
    return "This field is required.";
  }

  if (!stringValue) return null;

  if (!/^\d+$/.test(stringValue)) {
    return "Only numeric values are allowed.";
  }

  const numericValue = Number(stringValue);
  const minValue = Number(min);
  const maxValue = Number(max);

  if (!isNaN(minValue) && numericValue < minValue) {
    return `Minimum value is ${minValue}.`;
  }

  if (!isNaN(maxValue) && numericValue > maxValue) {
    return `Maximum value is ${maxValue}.`;
  }

  return null;
};
