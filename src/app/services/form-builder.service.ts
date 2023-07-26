import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormField} from '../interfaces/ElementsInterface';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  private formFields$: BehaviorSubject<FormField[]> = new BehaviorSubject<FormField[]>([]);

  constructor() {}

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
}
