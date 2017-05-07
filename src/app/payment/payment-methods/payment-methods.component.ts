import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {

  selectedTab = 1;
  @Input() pledgedAmount: number;
  @Input() projectId: number;
  @Input() rewardId: number;

  constructor() { }

  ngOnInit() {
  }

  changeTab(number) {
    this.selectedTab = number;
  }


}
