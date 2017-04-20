import { Project } from './../../../../core/models/project';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pledge-more',
  templateUrl: './pledge-more.component.html',
  styleUrls: ['./pledge-more.component.scss']
})
export class PledgeMoreComponent implements OnInit {

  amount: number;
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
