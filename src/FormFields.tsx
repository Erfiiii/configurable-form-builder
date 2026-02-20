import { type PropsWithChildren } from "react";
import { FormFieldItem } from "./FormFieldItem";
import type { FormField } from "./types";
import { useFormContext } from "./context/";
import { Button } from "./shared/button";

interface OwnProps {
  id?: string;
  value: FormField[];
}

type Props = PropsWithChildren<OwnProps>;

export function FormFields(props: Props) {
  const { id, value } = props;
  const { dispatch } = useFormContext();
  return (
    <div className="block shadow-md border-gray-200 rounded-md p-4 border">
      {value.map((item) => (
        <FormFieldItem key={item.id} value={item} />
      ))}
      <Button
        className="bg-cyan-500 text-white mt-4"
        onClick={() => dispatch({ type: "ADD_FIELD", parentId: id })}
      >
        Add New Field
      </Button>
    </div>
  );
}
