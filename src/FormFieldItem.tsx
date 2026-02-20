import { type PropsWithChildren } from "react";
import { FormFields } from "./FormFields";
import type { FormField, FormFieldType } from "./types";
import { TrashIcon } from "./assets";
import { useFormContext } from "./context";
import { Select } from "./shared/select";
import { Input } from "./shared/input";

interface OwnProps {
  value: FormField;
}

type Props = PropsWithChildren<OwnProps>;

export function FormFieldItem(props: Props) {
  const { value } = props;
  const { dispatch } = useFormContext();
  const typeOptions = [
    {
      label: "Text",
      value: "text",
    },
    {
      label: "Number",
      value: "number",
    },
    {
      label: "Group",
      value: "group",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 text-sm my-2">
        <Select
          label="Type"
          options={typeOptions}
          value={value.type}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              id: value.id,
              updates: { type: e.target.value as FormFieldType },
            })
          }
        />
        <Input
          label="Label"
          placeholder="type here..."
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              id: value.id,
              updates: { label: e.target.value },
            })
          }
        />
        {value.type !== "group" && (
          <Input
            label="required"
            checked={value.required}
            type="checkbox"
            className="border-gray-400 rounded"
            onChange={() =>
              dispatch({
                type: "UPDATE_FIELD",
                id: value.id,
                updates: { required: !value.required },
              })
            }
          />
        )}
        {value.type === "number" && (
          <div className="inline-flex gap-2">
            <Input
              label="Min"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  id: value.id,
                  updates: { min: e.target.value },
                })
              }
              placeholder="type here..."
              type="number"
            />
            <Input
              label="Max"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  id: value.id,
                  updates: { max: e.target.value },
                })
              }
              placeholder="type here..."
              type="number"
            />
          </div>
        )}
        <button
          className=" text-red-500 cursor-pointer"
          onClick={() => dispatch({ type: "REMOVE_FIELD", id: value.id })}
        >
          <TrashIcon />
        </button>
      </div>
      {value.type === "group" && (
        <FormFields value={value.childFields} id={value.id} />
      )}
    </div>
  );
}
