import type { PropsWithChildren, SelectHTMLAttributes } from "react";

interface OwnProps<
  T extends string,
> extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: {
    label: string;
    value: T;
  }[];
}

type Props<T extends string> = PropsWithChildren<OwnProps<T>>;

export function Select<T extends string>(props: Props<T>) {
  const { label, options, className, ...rest } = props;
  return (
    <div className="inline-flex gap-2 items-center">
      <label>{label}: </label>
      <select
        className={`className="border-gray-400 rounded ${className}`}
        {...rest}
      >
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
}
