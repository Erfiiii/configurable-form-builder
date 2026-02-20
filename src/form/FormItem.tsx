import type { PropsWithChildren } from "react";
import type { ID } from "../types";
import { useFormContext } from "../context";
import { FormItemTextInput } from "./FormItemTextInput";
import { FormItemNumberInput } from "./FormItemNumberInput";
import { FormItemGroupInput } from "./FormItemGroupInput";

interface OwnProps {
  value: ID;
}

type Props = PropsWithChildren<OwnProps>;

export function FormItem(props: Props) {
  const { value } = props;
  const { state } = useFormContext();
  const field = state.fields.get(value);
  if (!field) {
    return null;
  }
  return (
    <div className="text-sm w-full">
      <div className="flex flex-col gap-4">
        {field.type === "text" ? (
          <FormItemTextInput field={field} />
        ) : field.type === "number" ? (
          <FormItemNumberInput field={field} />
        ) : (
          <FormItemGroupInput field={field} />
        )}
      </div>
    </div>
  );
}
