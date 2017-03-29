import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    TranslateModule
  ],
  exports: [
    BrowserModule,
    TranslateModule
  ],
  declarations: []
})
export class SharedModule { }
