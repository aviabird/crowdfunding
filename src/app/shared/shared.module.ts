import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploadComponent,
    TooltipModule,
    DatepickerModule
  ],
  declarations: [
    ImageUploadComponent,
  ]
})
export class SharedModule { }
