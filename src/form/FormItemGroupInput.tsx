import type { PropsWithChildren } from "react";
import type { GroupFormField } from "../types";
import { Form } from "./Form";

interface OwnProps {
  field: GroupFormField;
}

type Props = PropsWithChildren<OwnProps>;

export function FormItemGroupInput(props: Props) {
  const { field } = props;
  return (
    <div className="flex flex-col gap-2">
      <span className="font-medium">{field.label}:</span>
      <Form value={field.childFieldIds} />
    </div>
  );
}
