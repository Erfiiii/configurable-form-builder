import type { FormField, ID, State } from "./types";
import {
  addNewItemToTargetGroup,
  deleteFormField,
  editFormField,
} from "./utils";

export type Action =
  | { type: "ADD_FIELD"; id?: ID }
  | { type: "REMOVE_FIELD"; id: ID }
  | { type: "UPDATE_FIELD"; id: ID; updates: Partial<FormField> }
  | { type: "SET_FORM"; payload: State };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_FORM":
      return action.payload;

    case "ADD_FIELD":
      return addNewItemToTargetGroup(state, action.id);

    case "REMOVE_FIELD":
      return deleteFormField(state, action.id);

    case "UPDATE_FIELD":
      return editFormField(state, action.id, action.updates);

    default:
      return state;
  }
}
