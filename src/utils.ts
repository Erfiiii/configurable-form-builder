import type { FormField } from "./types";

export const addNewItemToTargetGroup = (
  items: FormField[],
  parentId?: string,
): FormField[] => {
  const newItem: FormField = {
    type: "text",
    required: false,
    label: "[Empty]",
    id: crypto.randomUUID() as string,
  };
  if (!parentId) {
    return [...items, newItem];
  }
  return items.map((item) => {
    if (item.id === parentId && item.type === "group") {
      return {
        ...item,
        childFields: [...(item.childFields || []), newItem],
      };
    } else if (item.type === "group") {
      return {
        ...item,
        childFields: addNewItemToTargetGroup(item.childFields, parentId),
      };
    }
    return item;
  });
};

export const editFormField = (
  items: FormField[],
  id: string,
  updates: Partial<FormField>,
): FormField[] => {
  return items.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        ...updates,
        ...(updates.type === "group" ? { childFields: [] } : {}),
      };
    } else if (item.type === "group") {
      return {
        ...item,
        childFields: editFormField(item.childFields ?? [], id, updates),
      };
    }
    return item;
  });
};

export const deleteFormField = (
  items: FormField[],
  id: string,
): FormField[] => {
  return items
    .filter((item) => item.id !== id)
    .map((item) =>
      item.type === "group"
        ? { ...item, childFields: deleteFormField(item.childFields, id) }
        : item,
    );
};
