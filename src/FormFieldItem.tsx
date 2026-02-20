import { type PropsWithChildren } from "react";
import { FormFields } from "./FormFields";
import type { FormFieldType, ID } from "./types";
import { ArrowDown, TrashIcon } from "./assets";
import { useFormContext } from "./context";
import { Select } from "./shared/select";
import { Input } from "./shared/input";

interface OwnProps {
  value: ID;
}

type Props = PropsWithChildren<OwnProps>;

export function FormFieldItem(props: Props) {
  const { value } = props;
  const { state, dispatch } = useFormContext();
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

  const field = state.fields.get(value);
  if (!field) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 text-sm my-2">
        <Select
          label="Type"
          options={typeOptions}
          value={field.type}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIELD",
              id: value,
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
              id: value,
              updates: { label: e.target.value },
            })
          }
        />
        {field.type !== "group" && (
          <Input
            label="required"
            checked={field.required}
            type="checkbox"
            className="border-gray-400 rounded"
            onChange={() =>
              dispatch({
                type: "UPDATE_FIELD",
                id: value,
                updates: { required: !field.required },
              })
            }
          />
        )}
        {field.type === "number" && (
          <div className="inline-flex gap-2">
            <Input
              label="Min"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  id: value,
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
                  id: value,
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
          onClick={() => dispatch({ type: "REMOVE_FIELD", id: value })}
        >
          <TrashIcon />
        </button>
        <button
          className=" text-cyan-700 cursor-pointer"
          onClick={() => dispatch({ type: "MOVE_FIELD_DOWN", id: value })}
        >
          <ArrowDown />
        </button>
        <button
          className=" text-cyan-700 cursor-pointer"
          onClick={() => dispatch({ type: "MOVE_FIELD_UP", id: value })}
        >
          <ArrowDown style={{ transform: "rotate(180deg)" }} />
        </button>
      </div>
      {field.type === "group" && (
        <FormFields value={field.childFieldIds} id={value} />
      )}
    </div>
  );
}
