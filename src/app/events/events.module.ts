import { EventsComponent } from './events.component';
import { RouterModule } from '@angular/router';
import { routes } from './events.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ],
  declarations: [
    EventsComponent
  ],
  providers: []
})
export class EventsModule { }
