import type { FormField } from "./types";
import {
  addNewItemToTargetGroup,
  deleteFormField,
  editFormField,
} from "./utils";

export type Action =
  | { type: "ADD_FIELD"; parentId?: string }
  | { type: "REMOVE_FIELD"; id: string }
  | { type: "UPDATE_FIELD"; id: string; updates: Partial<FormField> }
  | { type: "SET_FORM"; payload: FormField[] };

export function reducer(state: FormField[], action: Action): FormField[] {
  switch (action.type) {
    case "SET_FORM":
      return action.payload;

    case "ADD_FIELD":
      return addNewItemToTargetGroup(state, action.parentId);

    case "REMOVE_FIELD":
      return deleteFormField(state, action.id);

    case "UPDATE_FIELD":
      return editFormField(state, action.id, action.updates);

    default:
      return state;
  }
}
