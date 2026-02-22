import type { InputHTMLAttributes, PropsWithChildren } from "react";

interface OwnProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

type Props = PropsWithChildren<OwnProps>;

export const Input = (props: Props) => {
  const { label, className, error, ...rest } = props;
  return (
    <div className="inline-flex gap-2 items-baseline">
      <label>{label}: </label>
      <div className="flex flex-col">
        <input
          className={`max-w-32 border-gray-200 rounded-md ${error ? "border-red-400" : ""} ${className}`}
          {...rest}
        />
        {error && <span className="text-xs text-red-400">{error}</span>}
      </div>
    </div>
  );
};
