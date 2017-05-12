import { Router } from '@angular/router';
import { Reward } from './../../../../core/models/reward';
import { DateService } from './../../../../core/services/date.service';
import { Project } from './../../../../core/models/project';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pledge-more',
  templateUrl: './pledge-more.component.html',
  styleUrls: ['./pledge-more.component.scss']
})
export class PledgeMoreComponent implements OnInit {

  amount: number;
  @Input() project: Project;
  isAmountValid: boolean;

  constructor(private router: Router) {
    this.isAmountValid = true;
  }

  ngOnInit() {
  }

  onContinue(index) {
    const reward: Reward = this.project.rewards[index];
    this.isAmountValid = this.amount < reward.amount || typeof this.amount === 'undefined'  ? false : true;

    if (this.isAmountValid) {
      this.router.navigate(['/projects', this.project.id, 'payment'], {
        queryParams: {
          'amount': reward.amount,
          'reward': reward.id
        }
      });
    }
  }

}
