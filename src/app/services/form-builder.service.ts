import {Injectable} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {FormField, FormFieldGroup} from '../interfaces/ElementsInterface';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  private formFields$: BehaviorSubject<FormField[]> = new BehaviorSubject<FormField[]>([]);

  constructor(private fb: FormBuilder) {
  }

  getFormFields(): Observable<FormField[]> {
    return this.formFields$.asObservable();
  }

  addFormField(formField: FormField): void {
    const currentFormFields = this.formFields$.getValue();
    this.formFields$.next([...currentFormFields, formField]);
  }

  removeFormField(index: number): void {
    const currentFormFields = this.formFields$.getValue();
    currentFormFields.splice(index, 1);
    this.formFields$.next(currentFormFields);
  }

  createForm(): FormGroup {
    const formGroup: { [key: string]: FormControl | FormArray } = {};

    const formFields: FormField[] | FormFieldGroup[] = this.formFields$.getValue();
    for (const formField of formFields) {
      let formControl: FormControl;

      if (formField.required) {
        formControl = this.fb.control('', Validators.required);
      } else {
        formControl = this.fb.control('');
      }

      formGroup[formField.name] = formControl;

      if ('options' in formField && formField.options) {
        const optionsArray = formField.options.map((option) => option.trim());
        const formArray = this.fb.array(optionsArray.map((option) => this.fb.control(option)));
        formGroup[formField.name + 'Group'] = formArray;
      } else if ('checkboxesGroup' in formField && formField.checkboxesGroup) {
        const checkboxesArray = formField.checkboxesGroup.map(() => this.fb.control(false));
        const formArray = this.fb.array(checkboxesArray);
        formGroup[formField.name + 'Group'] = formArray;
      } else if ('radiosGroup' in formField && formField.radiosGroup) {
        const radiosArray = formField.radiosGroup.map((radio) => this.fb.control(radio.trim()));
        const formArray = this.fb.array(radiosArray);
        formGroup[formField.name + 'Group'] = formArray;
      }
    }

    return this.fb.group(formGroup);
  }
}
