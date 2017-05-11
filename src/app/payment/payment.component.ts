import { PaymentService } from './services/payment.service';
import { Reward } from './../core/models/reward';
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
  projectId: number;
  selectedReward: Reward;

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService
  ) {
    this.route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
    this.route.queryParams.subscribe((params) => {
      this.selectedRewardId = params['reward'];
      this.pledgedAmount = params['amount'];
      this.getSelectedReward(this.selectedRewardId);
    });
  }

  ngOnInit() {}

  getSelectedReward(id) {
    if (id) {
      this.paymentService.fetchSelectedReward(id).subscribe((reward) => {
        this.selectedReward = reward;
      });
    }

  }

}
