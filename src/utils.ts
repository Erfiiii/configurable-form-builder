import type { FormField, GroupFormField, ID, State } from "./types";

export const getChildren = (
  config: State,
  groupField: GroupFormField,
): FormField[] => {
  return groupField.childFieldIds
    .map((item) => config.fields.get(item))
    .filter((item) => item !== undefined);
};

export const getRootFields = (config: State) => {
  return config.root.map((item) => {
    return config.fields.get(item);
  });
};

export const addNewItemToTargetGroup = (state: State, id: ID): State => {
  const newItemId = crypto.randomUUID();
  const fields = new Map(state.fields);
  const newItem: FormField = {
    type: "text",
    required: false,
    label: "[Empty]",
  };
  const foundItem = fields.get(id);

  if (foundItem) {
    (foundItem as GroupFormField).childFieldIds.push(newItemId);
  }
  fields.set(newItemId, newItem);

  return {
    ...state,
    root: state.root.includes(id) ? [...state.root, id] : state.root,
    fields,
  };
};

export const editFormField = (
  state: State,
  id: ID,
  updates: Partial<FormField>,
): State => {
  const fields = new Map(state.fields);

  const item = fields.get(id);

  if (!item) return state;

  const newItem = { ...item, ...updates };
  fields.set(id, newItem as FormField);

  return {
    ...state,
    fields,
  };
};

export const deleteFormField = (state: State, id: ID): State => {
  const fields = new Map(state.fields);

  fields.delete(id);
  fields.forEach((item) => {
    if (item.type === "group") {
      const groupItem = item as GroupFormField;
      groupItem.childFieldIds = groupItem.childFieldIds.filter(
        (childId) => childId !== id,
      );
    }
  });
  return {
    ...state,
    root: state.root.filter((item) => item !== id),
    fields,
  };
};
