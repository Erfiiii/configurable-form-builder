import type { FormField, ID, State, GroupFormField } from "../types";

export const convertStateToJson = (state: State) => {
  const { root, fields } = state;

  const buildJson = (ids: ID[]): any[] => {
    return ids
      .map((id) => {
        const field = fields.get(id);
        if (!field) return null;
        if (field.type === "group") {
          const { childFieldIds, ...rest } = field as GroupFormField;
          return {
            ...rest,
            childFields: buildJson(childFieldIds),
          };
        }
        return field;
      })
      .filter((item) => item !== null);
  };

  return JSON.stringify(buildJson(root), null, 2);
};

export const convertJsonToState = (json: string): State => {
  const parsed = JSON.parse(json);
  const fields = new Map<ID, FormField>();
  const root: ID[] = [];

  const buildState = (items: any[], parentId?: ID) => {
    items.forEach((item) => {
      const id = crypto.randomUUID();
      if (item.type === "group") {
        const groupField: GroupFormField = {
          type: "group",
          label: item.label,
          childFieldIds: [],
        };
        fields.set(id, groupField);
        if (parentId) {
          const parentField = fields.get(parentId) as GroupFormField;
          parentField.childFieldIds.push(id);
        } else {
          root.push(id);
        }
        buildState(item.childFields, id);
      } else {
        fields.set(id, item);
        if (parentId) {
          const parentField = fields.get(parentId) as GroupFormField;
          parentField.childFieldIds.push(id);
        } else {
          root.push(id);
        }
      }
    });
  };

  buildState(parsed);

  return { fields, root };
};
