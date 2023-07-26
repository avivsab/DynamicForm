export enum InputType {
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
  options?: string[];
  bindTo?: string;
  description?: string;
}
