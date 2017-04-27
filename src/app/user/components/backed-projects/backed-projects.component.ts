import { User } from './../../../core/models/user';
import { Store } from '@ngrx/store';
import { AppState } from './../../../app.state';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-backed-projects',
  templateUrl: './backed-projects.component.html',
  styleUrls: ['./backed-projects.component.scss']
})
export class BackedProjectsComponent implements OnInit {

  @Input() user: User;

  constructor() {}

  ngOnInit() {
  }

}
