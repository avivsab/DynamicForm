export enum InputType {
  None = '--select input--',
  Text = 'text',
  Checkbox = 'checkbox',
  Radio = 'radio',
  Select = 'select',
}

export interface FormField {
  type: InputType;
  label: string;
  name: string;
  required: boolean;
}

export interface FormFieldGroup extends FormField {
  options?: string[];
  checkboxesGroup?: string[];
  radiosGroup?: string[];
}

