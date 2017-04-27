import { User } from './../../../core/models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-campaigns',
  templateUrl: './user-campaigns.component.html',
  styleUrls: ['./user-campaigns.component.scss']
})
export class UserCampaignsComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
