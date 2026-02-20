import type { PropsWithChildren } from "react";

interface OwnProps {
  open?: boolean;
}

type Props = PropsWithChildren<OwnProps>;

export function Modal(props: Props) {
  const { open = false } = props;
  if (!open) return null;
  const { children } = props;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded p-4 w-full max-w-md">{children}</div>
    </div>
  );
}
