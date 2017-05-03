import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {

  selectedTab = 1;

  constructor() { }

  ngOnInit() {
  }

  changeTab(number) {
    this.selectedTab = number;
  }


}
