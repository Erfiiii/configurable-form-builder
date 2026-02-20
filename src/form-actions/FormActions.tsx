import {
  use,
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { Button } from "../shared/button";
import { ExportFormModal } from "./ExportFormModal";
import { ImportFormModal } from "./ImportFormModal";
import type { State } from "../types";
import { convertJsonToState, convertStateToJson } from "./utils";
import { useFormContext } from "../context";

interface OwnProps {
  value: State;
}

type Props = PropsWithChildren<OwnProps>;

export function FormActions(props: Props) {
  const { dispatch } = useFormContext();
  const { value } = props;
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);
  const onSave = useCallback(
    (json: string) => {
      const state = convertJsonToState(json);
      if (state) {
        dispatch({ type: "SET_FORM", payload: state });
      }
      setIsImportOpen(false);
    },
    [dispatch],
  );
  const jsonValue = useMemo(() => convertStateToJson(value), [value]);
  const isDisabled = useMemo(() => !value.fields.size, [value.fields.size]);
  return (
    <div className="flex gap-2">
      <Button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsImportOpen(true)}
      >
        Import JSON
      </Button>
      <Button
        disabled={isDisabled}
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => setIsExportOpen(true)}
      >
        Export JSON
      </Button>
      <ExportFormModal
        open={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        value={jsonValue}
      />
      <ImportFormModal
        open={isImportOpen}
        onClose={() => setIsImportOpen(false)}
        onSave={onSave}
      />
    </div>
  );
}
