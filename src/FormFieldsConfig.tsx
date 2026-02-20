import { type PropsWithChildren } from "react";
import { useFormContext } from "./context/FormContextProvider";
import { FormFields } from "./FormFields";
import { FormActions } from "./form-actions/FormActions";

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function FormFieldsConfig(props: Props) {
  const { state } = useFormContext();
  return (
    <div className="p-4 rounded bg-gray-50  w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl mb-2">Form Constructor</h2>
        <FormActions value={state} />
      </div>
      <FormFields value={state.root} />
    </div>
  );
}
