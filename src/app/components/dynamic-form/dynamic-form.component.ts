import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { FormBuilderService } from '../../services/form-builder.service';
import {FormField, FormFieldGroup, InputType} from '../../interfaces/ElementsInterface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup;

  constructor(private fb: FormBuilder, private formBuilderService: FormBuilderService) {
    this.dynamicForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.formBuilderService.getFormFields().subscribe((formFields) => {
      this.dynamicForm = this.createForm(formFields);
    });
  }

  createForm(formFields: FormField[]): FormGroup {
  const formGroup: { [key: string]: FormControl | FormArray } = {};

  this.formBuilderService.getFormFields().subscribe((responseFormFields: FormField[] | FormFieldGroup[]) => {
    for (const formField of responseFormFields) {
      let formControl: FormControl;

      if (formField.required) {
        formControl = this.fb.control('', Validators.required);
      } else {
        formControl = this.fb.control('');
      }

      formGroup[formField.name] = formControl;

      if ('options' in formField && formField.options) {
        const optionsArray = (formField as FormFieldGroup).options?.map((option) => option.trim()) || [];
        const formArray = this.fb.array(optionsArray.map((option) => this.fb.control(option)));
        formGroup[formField.name + 'Group'] = formArray;
      } else if ('checkboxesGroup' in formField && formField.checkboxesGroup) {
        const checkboxesArray = (formField as FormFieldGroup).checkboxesGroup?.map(() => this.fb.control(false)) || [];
        const formArray = this.fb.array(checkboxesArray);
        formGroup[formField.name + 'Group'] = formArray;
      } else if ('radiosGroup' in formField && formField.radiosGroup) {
        const radiosArray = (formField as FormFieldGroup).radiosGroup?.map((radio) => this.fb.control(radio.trim())) || [];
        const formArray = this.fb.array(radiosArray);
        formGroup[formField.name + 'Group'] = formArray;
      }
    }
  });

  return this.fb.group(formGroup);
}

get formControls(): string[] {
  return Object.keys(this.dynamicForm.controls);
}

getFormControlArray(controlName: string): FormArray {
  return this.dynamicForm.get(controlName) as FormArray;
}

getFormControlValue(controlName: string, index: number): string {
  const formControl = this.getFormControlArray(controlName).at(index);
  return formControl?.value;
}




  onSubmit(): void {
    // Handle form submission here
  }
}
