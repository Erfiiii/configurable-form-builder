import type { FormField, ID, State } from "./types";
import {
  addNewItemToTargetGroup,
  deleteFormField,
  editFormField,
  moveFormFieldDown,
  moveFormFieldUp,
} from "./utils";

export type Action =
  | { type: "ADD_FIELD"; id?: ID }
  | { type: "REMOVE_FIELD"; id: ID }
  | { type: "UPDATE_FIELD"; id: ID; updates: Partial<FormField> }
  | { type: "SET_FORM"; payload: State }
  | { type: "MOVE_FIELD_UP"; id: ID }
  | { type: "MOVE_FIELD_DOWN"; id: ID };

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

    case "MOVE_FIELD_UP":
      return moveFormFieldUp(state, action.id);

    case "MOVE_FIELD_DOWN":
      return moveFormFieldDown(state, action.id);
    default:
      return state;
  }
}
