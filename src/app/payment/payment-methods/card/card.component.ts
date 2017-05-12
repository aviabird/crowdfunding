import { StripeService } from './../../../core/services/stripe.service';
import { ProjectHttpService } from './../../../project/services/http/project-http.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pledgedAmount: number;
  @Input() projectId: number;
  @Input() rewardId: number;

  constructor(private stripeService: StripeService) { }

  ngOnInit() {}

  openCheckout() {
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_M2e5YbVJN53ZL7CWp1KdgNAC',
      locale: 'auto',
      token: (token: any) => {
        this.stripeService.payByCard(token.id, this.projectId, this.pledgedAmount, this.rewardId);
      }
    });

    handler.open({
      name: 'CrowdPouch',
      description: 'Back this project',
      amount: this.pledgedAmount * 100
    });

  }

}
