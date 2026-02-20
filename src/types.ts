export type FormFieldType = "text" | "number" | "group";

export type ID = string;
interface BaseFormField<T extends FormFieldType> {
  type: T;
  label: string;
}

interface TextFormField extends BaseFormField<"text"> {
  required: boolean;
}
interface NumberFormField extends BaseFormField<"number"> {
  required: boolean;
  min?: string;
  max?: string;
}
export interface GroupFormField extends BaseFormField<"group"> {
  childFieldIds: ID[];
}

export type FormField = TextFormField | NumberFormField | GroupFormField;

export interface State {
  fields: Map<ID, FormField>;
  root: ID[];
}
