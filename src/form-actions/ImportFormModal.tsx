import { useState, type PropsWithChildren } from "react";
import { Modal } from "../shared/modal";
import { Button } from "../shared/button";

interface OwnProps {
  open?: boolean;
  onSave: (json: string) => void;
  onClose: () => void;
}
type Props = PropsWithChildren<OwnProps>;

export function ImportFormModal(props: Props) {
  const { open = false, onClose, onSave } = props;
  const [json, setJson] = useState("");

  return (
    <Modal open={open}>
      <span>JSON:</span>
      <textarea
        className="w-full h-40 p-2 border rounded"
        value={json}
        onChange={(e) => setJson(e.target.value)}
      />
      <div className="flex justify-end gap-2 mt-4">
        <Button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onSave(json)}
        >
          Save
        </Button>
        <Button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}
