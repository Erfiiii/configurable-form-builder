import type { PropsWithChildren } from "react";
import type { FormField } from "./types";
import { Input } from "./shared/input";

interface OwnProps {
  value: FormField[];
}

type Props = PropsWithChildren<OwnProps>;

export function FormPreview(props: Props) {
  const { value } = props;
  return (
    <div className="shadow-md border-gray-200 rounded-md p-4 border text-sm w-full">
      <div className="flex flex-col gap-4">
        {value.map((item) =>
          item.type === "text" ? (
            <Input
              label={`${item.label} ${item.required ? "*" : ""}`}
              type="text"
              required={item.required}
            />
          ) : item.type === "number" ? (
            <Input
              label={`${item.label} ${item.required ? "*" : ""}`}
              type="number"
              min={item.min}
              max={item.max}
              required={item.required}
            />
          ) : (
            <>
              <span>{item.label}:</span>
              <FormPreview value={item.childFields} />
            </>
          ),
        )}
      </div>
    </div>
  );
}
