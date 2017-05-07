import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  pledgedAmount: number;
  selectedRewardId: number;

  constructor(
    private route: ActivatedRoute
  ) {
    Stripe.setPublishableKey('pk_test_M2e5YbVJN53ZL7CWp1KdgNAC');
    this.route.queryParams.subscribe((params) => {
      this.selectedRewardId = params['reward'];
      this.pledgedAmount = params['amount'];
    });
  }

  ngOnInit() {
  }

}
