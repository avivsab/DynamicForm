import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilderService } from '../../services/form-builder.service';
import { InputType } from '../../interfaces/ElementsInterface';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent implements OnInit {
  checkboxElement: FormGroup;

  constructor(private fb: FormBuilder, private formBuilderService: FormBuilderService) {
    this.checkboxElement = this.fb.group({
      type: [InputType.Checkbox, Validators.required],
      label: ['', Validators.required],
      name: ['', Validators.required],
      required: [false],
      checkboxesGroup: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.checkboxElement);
  }
}
