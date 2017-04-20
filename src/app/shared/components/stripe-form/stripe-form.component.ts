import { StripeService } from './../../../core/services/stripe.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stripe-form',
  templateUrl: './stripe-form.component.html',
  styleUrls: ['./stripe-form.component.scss']
})
export class StripeFormComponent implements OnInit {

  amount = 1000;
  @Input() projectId: number;

  constructor(private stripeService: StripeService) { }

  ngOnInit() {
  }

  openCheckout() {
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_M2e5YbVJN53ZL7CWp1KdgNAC',
      locale: 'auto',
      token: (token: any) => {
        // console.log('token', token);
        this.stripeService.createCharge(token.id, this.projectId, this.amount);
      }
    });

    handler.open({
      name: 'CrowdPouch',
      description: 'Back this project',
      amount: 2000
    });

  }

}
