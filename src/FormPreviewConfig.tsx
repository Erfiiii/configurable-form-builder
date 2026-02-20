import type { PropsWithChildren } from "react";
import { useFormContext } from "./context/FormContextProvider";
import { FormPreview } from "./FormPreview";

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function FormPreviewConfig(props: Props) {
  const { state } = useFormContext();

  return (
    <div className="p-4 rounded w-full">
      <h2 className="text-2xl mb-2">Form Preview</h2>
      <FormPreview value={state} />
    </div>
  );
}
