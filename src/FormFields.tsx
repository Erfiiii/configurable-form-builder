import { type PropsWithChildren } from "react";
import { FormFieldItem } from "./FormFieldItem";
import type { ID } from "./types";
import { useFormContext } from "./context/";
import { Button } from "./shared/button";

interface OwnProps {
  id?: ID;
  value: ID[];
}

type Props = PropsWithChildren<OwnProps>;

export function FormFields(props: Props) {
  const { id, value } = props;
  const { dispatch } = useFormContext();
  return (
    <div className="block shadow-md border-gray-200 rounded-md p-4 border">
      {value.map((item) => (
        <FormFieldItem key={item} value={item} />
      ))}
      <Button
        className="bg-cyan-500 text-white mt-4"
        onClick={() => dispatch({ type: "ADD_FIELD", id })}
      >
        Add New Field
      </Button>
    </div>
  );
}
