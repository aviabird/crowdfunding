import { StripeService } from './../../core/services/stripe.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sofort-redirect-url',
  templateUrl: './sofort-redirect-url.component.html',
  styleUrls: ['./sofort-redirect-url.component.scss']
})
export class SofortRedirectUrlComponent implements OnInit {

  projectId: number;
  rewardId: number;
  sourceId: string;
  sourceSecret: string;

  constructor(
    private route: ActivatedRoute,
    private stripeService: StripeService
  ) {
    Stripe.setPublishableKey('pk_test_M2e5YbVJN53ZL7CWp1KdgNAC');
    this.route.params.subscribe((params) => this.projectId = params['id']);
    this.route.queryParams.subscribe((params) => {
      this.sourceId = params['source'];
      this.sourceSecret = params['client_secret'];
      this.rewardId = params['reward'];
    });
  }

  ngOnInit() {
    this.sourcePolling();
  }

  private sourcePolling() {
    Stripe.source.poll(this.sourceId, this.sourceSecret, (status, source) => {
      if (status === 200) {
        if (source.status === 'chargeable') {
          const amount = source.amount / 100;
          this.stripeService.payBySofort(source.id, this.projectId, amount, this.rewardId);
        }
      } else {
        console.log('error', source);
      }
    });
  }

}
