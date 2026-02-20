import type {
  FormField,
  GroupFormField,
  ID,
  State,
  TextFormField,
} from "./types";

export const getChildren = (
  state: State,
  groupField: GroupFormField,
): FormField[] => {
  return groupField.childFieldIds
    .map((item) => state.fields.get(item))
    .filter((item) => item !== undefined);
};

export const getRootFields = (state: State) => {
  return state.root
    .map((item) => {
      return state.fields.get(item);
    })
    .filter((item) => item !== undefined) as FormField[];
};

export const addNewItemToTargetGroup = (state: State, id?: ID): State => {
  const newItemId = crypto.randomUUID();
  const fields = new Map(state.fields);
  const newItem: FormField = {
    type: "text",
    required: false,
    label: "[Empty]",
  };
  if (!id) {
    fields.set(newItemId, newItem);
    return {
      ...state,
      root: [...state.root, newItemId],
      fields,
    };
  }
  const foundItem = fields.get(id);

  if (foundItem) {
    (foundItem as GroupFormField).childFieldIds.push(newItemId);
  }
  fields.set(newItemId, newItem);

  return {
    ...state,
    fields,
  };
};

export const editFormField = (
  state: State,
  id: ID,
  update: Partial<FormField>,
): State => {
  const fields = new Map(state.fields);

  const item = fields.get(id);

  if (!item) return state;
  if (!update.type) {
    fields.set(id, {
      ...item,
      ...update,
    } as FormField);
  } else if (update.type === "group") {
    const newItem: GroupFormField = {
      type: "group",
      label: item.label,
      childFieldIds: [],
    };
    fields.set(id, newItem);
  } else if (update.type === "text") {
    const newItem: TextFormField = {
      type: "text",
      label: item.label,
      required: false,
    };
    fields.set(id, newItem);
  } else if (update.type === "number") {
    const newItem: FormField = {
      type: "number",
      label: item.label,
      required: false,
      min: undefined,
      max: undefined,
    };
    fields.set(id, newItem);
  }

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
