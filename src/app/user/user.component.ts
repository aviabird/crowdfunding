import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  selectedTab = 1;

  constructor() { }

  ngOnInit() {
  }

  changeTab(tab) {
    this.selectedTab = tab;
  }

}
