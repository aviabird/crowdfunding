import { StripeFormComponent } from './components/stripe-form/stripe-form.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StripeFormDirective } from './directives/stripe-form.directive';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploadComponent,
    StripeFormComponent,
    StripeFormDirective
  ],
  declarations: [
    ImageUploadComponent,
    StripeFormComponent,
    StripeFormDirective
  ]
})
export class SharedModule { }
