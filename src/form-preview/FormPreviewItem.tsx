import type { PropsWithChildren } from "react";
import { FormPreview } from "./FormPreview";
import type { ID } from "../types";
import { Input } from "../shared/input";
import { useFormContext } from "../context";

interface OwnProps {
  value: ID;
}

type Props = PropsWithChildren<OwnProps>;

export function FormPreviewItem(props: Props) {
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
          <Input
            label={`${field.label} ${field.required ? "*" : ""}`}
            type="text"
            required={field.required}
          />
        ) : field.type === "number" ? (
          <Input
            label={`${field.label} ${field.required ? "*" : ""}`}
            type="number"
            min={field.min}
            max={field.max}
            required={field.required}
          />
        ) : (
          <div className="flex flex-col gap-2">
            <span className="font-medium">{field.label}:</span>
            <FormPreview value={field.childFieldIds} />
          </div>
        )}
      </div>
    </div>
  );
}
