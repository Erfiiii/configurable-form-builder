import { useMemo, useState } from "react";
import { Input } from "../shared/input";
import type { TextFormField } from "../types";
import { textValidator } from "./utils";

interface OwnProps {
  field: TextFormField;
}

type Props = OwnProps;

export function FormItemTextInput(props: Props) {
  const { field } = props;
  const [value, setValue] = useState("");

  const onChangeValue = (e: any) => {
    const value = e.target.value;
    setValue(value);
  };
  const errorMessage = useMemo(
    () => textValidator(value, field.required) ?? "",
    [value, field.required],
  );
  return (
    <Input
      label={`${field.label} ${field.required ? "*" : ""}`}
      type="text"
      required={field.required}
      onChange={onChangeValue}
      value={value}
      error={errorMessage}
    />
  );
}
