import { Component, OnInit } from '@angular/core';
import { FormBuilderService} from '../../services/form-builder.service';
import {FormField, InputType} from '../../interfaces/ElementsInterface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'fields-options',
  templateUrl: './fields-options.component.html',
  styleUrls: ['./fields-options.component.scss'],
})
export class FieldsOptionsComponent implements OnInit {
  formElementForm: FormGroup;

  // Enum to array for select options
  inputTypes = Object.values(InputType);
  selectedInputType: string;

  constructor(private fb: FormBuilder, private formBuilderService: FormBuilderService) {
    this.formElementForm = this.fb.group({
      type: [InputType.Text, Validators.required],
      label: ['', Validators.required],
      name: ['', Validators.required],
      required: [false],
      options: [''],
      bindTo: [''],
      description: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.formElementForm.valid) {
      const formField: FormField = this.formElementForm.value;
      this.formBuilderService.addFormField(formField);
      this.formElementForm.reset({ type: InputType.Text, required: false });
    }
  }

  showFieldConfig(event: Event) {
    this.selectedInputType = (event.target as HTMLSelectElement).value;
  }
}
