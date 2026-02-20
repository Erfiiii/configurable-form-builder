import type { PropsWithChildren } from "react";
import { useFormContext } from "./context/FormContextProvider";
import { FormFields } from "./FormFields";

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function FormFieldsConfig(props: Props) {
  const { state } = useFormContext();

  return (
    <div className="p-4 rounded bg-gray-50  w-full">
      <h2 className="text-2xl">Form Constructor</h2>
      <FormFields value={state} />
    </div>
  );
}
