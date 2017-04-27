import { User } from './../../../core/models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-backers',
  templateUrl: './project-backers.component.html',
  styleUrls: ['./project-backers.component.scss']
})
export class ProjectBackersComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {}

}
