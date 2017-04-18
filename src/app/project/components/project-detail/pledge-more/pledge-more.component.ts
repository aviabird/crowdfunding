import { Reward } from './../../../../core/models/reward';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pledge-more',
  templateUrl: './pledge-more.component.html',
  styleUrls: ['./pledge-more.component.scss']
})
export class PledgeMoreComponent implements OnInit {

  @Input() rewards: Reward[];

  constructor() { }

  ngOnInit() {
  }

}
