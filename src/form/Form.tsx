import type { PropsWithChildren } from "react";
import type { ID } from "../types";
import { FormItem } from "./FormItem";

interface OwnProps {
  value: ID[];
}

type Props = PropsWithChildren<OwnProps>;

export function Form(props: Props) {
  const { value } = props;
  return (
    <div className="shadow-md border-gray-200 rounded-md p-4 border text-sm w-full">
      <div className="flex flex-col gap-4">
        {value.map((item) => (
          <FormItem key={item} value={item} />
        ))}
      </div>
    </div>
  );
}
