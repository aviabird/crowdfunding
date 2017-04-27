import { User } from './../../../core/models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-contacts-info',
  templateUrl: './name-contacts-info.component.html',
  styleUrls: ['./name-contacts-info.component.scss']
})
export class NameContactsInfoComponent implements OnInit {

  @Input() user: User;

  constructor() {}

  ngOnInit() {}

}
