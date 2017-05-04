import { DateService } from './../../../core/services/date.service';
import { Reward } from './../../../core/models/reward';
import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class RewardFormService {

  constructor(
    private fb: FormBuilder,
    private dateService: DateService
  ) { }

  initRewardForm(project) {
    let rewards = project.rewards;
    if (rewards.length === 0) {
      rewards = [new Reward];
    }

    const reward_attributes_array = [];
    rewards.forEach((reward: any) => {
      let date: Date = reward.delivery_date || new Date();
      date = new Date(date);
      reward_attributes_array.push(
        this.fb.group({
          'id': [reward.id],
          'title': [reward.title, Validators.required],
          'description': [reward.description, Validators.required],
          'delivery_date': [date],
          'day': [date.getDate()],
          'month': [this.dateService.months[date.getMonth()]],
          'year': [date.getFullYear()],
          'quantity': [reward.quantity, Validators.required],
          'amount': [reward.amount, Validators.required],
          '_destroy': [false]
        })
      );
    });

    return this.fb.group({
      'id': [project.id, Validators.required],
      'type': ['reward', Validators.required],
      'rewards_attributes': this.fb.array(reward_attributes_array)
    });
  }

}
