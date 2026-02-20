import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface OwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

type Props = PropsWithChildren<OwnProps>;

export const Button = (props: Props) => {
  const { children, className, ...rest } = props;

  return (
    <button
      className={`cursor-pointer border rounded-md p-2 text-white text-sm ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
