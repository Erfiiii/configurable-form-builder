import type { PropsWithChildren } from "react";

interface OwnProps {
  className?: string;
}

type Props = PropsWithChildren<OwnProps>;

export function LayoutItem(props: Props) {
  const { className } = props;
  return <div className={`flex w-full p-4 ${className}`}>{props.children}</div>;
}
