import type { PropsWithChildren } from "react";

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function Layout(props: Props) {
  return <div className="grid grid-cols-2 h-svh">{props.children}</div>;
}
