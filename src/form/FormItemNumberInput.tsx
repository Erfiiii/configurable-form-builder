import { Input } from "../shared/input";
import type { NumberFormField } from "../types";

interface OwnProps {
  field: NumberFormField;
}

type Props = OwnProps;

export function FormItemNumberInput(props: Props) {
  const { field } = props;
  return (
    <Input
      label={`${field.label} ${field.required ? "*" : ""}`}
      type="number"
      min={field.min}
      max={field.max}
      required={field.required}
    />
  );
}
