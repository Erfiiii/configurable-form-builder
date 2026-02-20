import type { PropsWithChildren } from "react";
import { Modal } from "../shared/modal";
import { Button } from "../shared/button";

interface OwnProps {
  open?: boolean;
  onClose: () => void;
  value: string;
}
type Props = PropsWithChildren<OwnProps>;

export function ExportFormModal(props: Props) {
  const { open = false, onClose, value } = props;
  const onCopy = () => {
    navigator.clipboard.writeText(value);
    onClose();
  };
  if (!open) return null;
  return (
    <Modal open={open}>
      <span>JSON:</span>
      <textarea
        className="w-full h-40 p-2 border rounded"
        value={value}
        readOnly
      />
      <div className="flex justify-end gap-2 mt-4">
        <Button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={onCopy}
        >
          Copy to Clipboard
        </Button>
        <Button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
}
