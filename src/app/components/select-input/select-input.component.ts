import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormBuilderService} from '../../services/form-builder.service';
import {InputType} from '../../interfaces/ElementsInterface';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {
  selectElement: FormGroup;
  constructor(private fb: FormBuilder, private formBuilderService: FormBuilderService) {
    this.selectElement = this.fb.group({
      type: [InputType.Select, Validators.required],
      label: ['', Validators.required],
      name: ['', Validators.required],
      required: [false],
      options: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.selectElement);

  }

}
