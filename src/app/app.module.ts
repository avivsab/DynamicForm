import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { FieldsOptionsComponent } from './components/fields-options/fields-options.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { SelectInputComponent } from './components/select-input/select-input.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { CheckboxInputComponent } from './components/checkbox-input/checkbox-input.component';
import { RadioInputComponent } from './components/radio-input/radio-input.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  { path: 'jsonData', component: MainComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FieldsOptionsComponent,
    TextInputComponent,
    SelectInputComponent,
    CheckboxInputComponent,
    RadioInputComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
