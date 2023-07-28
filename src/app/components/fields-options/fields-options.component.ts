import { Component, OnInit } from '@angular/core';
import { FormBuilderService} from '../../services/form-builder.service';
import {FormField, InputType} from '../../interfaces/ElementsInterface';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  ngOnInit(): void {}

  showFieldConfig(event: Event) {
    this.selectedInputType = (event.target as HTMLSelectElement).value;
  }
}
