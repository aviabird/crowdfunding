import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor() {
    Stripe.setPublishableKey('pk_test_M2e5YbVJN53ZL7CWp1KdgNAC');
  }

  ngOnInit() {
  }

}
