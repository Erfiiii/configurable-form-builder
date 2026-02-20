import type { InputHTMLAttributes, PropsWithChildren } from "react";

interface OwnProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

type Props = PropsWithChildren<OwnProps>;

export const Input = (props: Props) => {
  const { label, className, ...rest } = props;
  return (
    <div className="inline-flex gap-2 items-center">
      <label>{label}: </label>
      <input className={`border-gray-400 rounded ${className}`} {...rest} />
    </div>
  );
};
