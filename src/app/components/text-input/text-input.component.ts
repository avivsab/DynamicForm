import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBuilderService} from '../../services/form-builder.service';
import {FormField, InputType} from '../../interfaces/ElementsInterface';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
   inputTextForm: FormGroup;
   constructor(private fb: FormBuilder, private formBuilderService: FormBuilderService) {
    this.inputTextForm = this.fb.group({
      type: [InputType.None, Validators.required],
      label: ['', Validators.required],
      name: ['', Validators.required],
      required: [false],
      options: [''],
    });
  }
  ngOnInit(): void {
  }

    onSubmit(): void {
    if (this.inputTextForm.valid) {
      const formField: FormField = this.inputTextForm.value;
      this.formBuilderService.addFormField(formField);
      this.inputTextForm.reset({ type: InputType.Text, required: false });
    }
  }

}
