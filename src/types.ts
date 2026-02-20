export type FormFieldType = "text" | "number" | "group";

interface BaseFormField<T extends FormFieldType> {
  id: string;
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
interface GroupFormField extends BaseFormField<"group"> {
  childFields: FormField[];
}

export type FormField = TextFormField | NumberFormField | GroupFormField;
