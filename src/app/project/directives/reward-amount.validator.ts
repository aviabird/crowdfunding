import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

function validateRewardAmountFactory(goalAmount: number, quantity: number) {
  return (c: FormControl) => {
    const rewardAmount = c.value;
    const isValidAmount = rewardAmount * quantity < goalAmount ? true : false;
    return isValidAmount ? null : { validateAmount: true };
  };
}

@Directive({
  selector: '[validateAmount][ngControl][validateAmount][ngModel],[validateAmount][ngFormControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RewardAmountValidator), multi: true }
  ]
})
export class RewardAmountValidator {

  validator: Function;

  constructor(goalAmount: number, quantity: number) {
    this.validator = validateRewardAmountFactory(goalAmount, quantity);
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
}
