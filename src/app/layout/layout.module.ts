import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class LayoutModule { }
