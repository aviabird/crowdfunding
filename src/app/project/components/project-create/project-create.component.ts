import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  selectedTab: number;

  constructor() {
    this.selectedTab = 1;
  }

  ngOnInit() {
  }

  changeTab(tab: number) {
    this.selectedTab = tab;
  }

  incrementTab() {
    this.selectedTab++;
  }

}
