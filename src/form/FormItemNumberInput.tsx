import { useMemo, useState } from "react";
import { Input } from "../shared/input";
import type { NumberFormField } from "../types";
import { numberValidator } from "./utils";

interface OwnProps {
  field: NumberFormField;
}

type Props = OwnProps;

export function FormItemNumberInput(props: Props) {
  const { field } = props;
  const [value, setValue] = useState("");

  const onChangeValue = (e: any) => {
    const value = e.target.value;
    setValue(value);
  };

  const errorMessage = useMemo(
    () => numberValidator(value, field.min, field.max, field.required) ?? "",
    [value, field.min, field.max, field.required],
  );
  return (
    <Input
      label={`${field.label} ${field.required ? "*" : ""}`}
      type="number"
      min={field.min}
      max={field.max}
      required={field.required}
      onChange={onChangeValue}
      value={value}
      error={errorMessage}
      className="min-w-42"
    />
  );
}
