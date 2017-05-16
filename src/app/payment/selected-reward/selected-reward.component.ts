import { Reward } from './../../core/models/reward';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-reward',
  templateUrl: './selected-reward.component.html',
  styleUrls: ['./selected-reward.component.scss']
})
export class SelectedRewardComponent implements OnInit {

  @Input() reward: Reward;
  @Input() pledgedAmount: number;
  @Input() shippingAmount: number;
  @Input() totalAmount: number;
  @Input() currency;

  constructor() { }

  ngOnInit() {}

}
