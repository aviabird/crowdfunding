import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../core/models/user';
import { LiteProject } from '../../../core/models/lite-project';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {

  @Input() user: User;
  project: LiteProject;
  percent: number;
  options: any;

  constructor() {}

  ngOnInit() {
    this.project = this.user.project_in_funding_state;
    this.loadGraph();
  }

  totalDots() {
    let count;
    count = Math.floor(this.project.total_backers / 5);
    return count;
  }

  loadGraph() {
    this.percent = this.project.percent_funded;
    this.options = {
    barColor: '#ff8e00',
    trackColor: '#f9f9f9',
    scaleColor: '#ffffff',
    scaleLength: 5,
    lineCap: 'round',
    lineWidth: 10,
    size: 160,
    rotate: 0,
    animate: {
      duration: 1000,
      enabled: true
      }
    };
  }

 }
