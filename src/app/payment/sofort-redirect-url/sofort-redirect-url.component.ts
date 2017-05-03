import { StripeService } from './../../core/services/stripe.service';
import { ProjectService } from './../../project/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sofort-redirect-url',
  templateUrl: './sofort-redirect-url.component.html',
  styleUrls: ['./sofort-redirect-url.component.scss']
})
export class SofortRedirectUrlComponent implements OnInit {

  projectId: number;
  sourceId: string;
  sourceSecret: string;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private stripeService: StripeService
  ) {
    Stripe.setPublishableKey('pk_test_M2e5YbVJN53ZL7CWp1KdgNAC');
    this.route.params.subscribe((params) => this.projectId = params['id']);
    this.route.queryParams.subscribe((params) => {
      this.sourceId = params['source'];
      this.sourceSecret = params['client_secret'];
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
          this.stripeService.payBySofortPayments(source.id, this.projectId, amount);
        }
      } else {
        console.log('error', source);
      }
    });
  }

}
