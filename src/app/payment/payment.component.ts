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

  pledgedAmount: string;
  shippingAmount: string;
  totalAmount: number;
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
      this.shippingAmount = params['shippingAmount'];
      this.getSelectedReward(this.selectedRewardId);
    });
  }

  ngOnInit() {
    this.totalAmount = parseInt(this.pledgedAmount, 10) + parseInt(this.shippingAmount, 10);
  }

  getSelectedReward(id) {
    if (id) {
      this.paymentService.fetchSelectedReward(id).subscribe((reward) => {
        this.selectedReward = reward;
      });
    }

  }

}
