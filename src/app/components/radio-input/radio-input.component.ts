import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilderService } from '../../services/form-builder.service';
import { InputType } from '../../interfaces/ElementsInterface';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss']
})
export class RadioInputComponent implements OnInit {
  radioElement: FormGroup;

  constructor(private fb: FormBuilder, private formBuilderService: FormBuilderService) {
    this.radioElement = this.fb.group({
      type: [InputType.Radio, Validators.required],
      label: ['', Validators.required],
      name: ['', Validators.required],
      required: [false],
      radiosGroup: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.radioElement);
  }
}
