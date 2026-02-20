import { Input } from "../shared/input";
import type { TextFormField } from "../types";

interface OwnProps {
  field: TextFormField;
}

type Props = OwnProps;

export function FormItemTextInput(props: Props) {
  const { field } = props;
  return (
    <Input
      label={`${field.label} ${field.required ? "*" : ""}`}
      type="text"
      required={field.required}
    />
  );
}
