import { UserActions } from './../../../../user/actions/user.actions';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { User } from './../../../../core/models/user';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Reward } from './../../../../core/models/reward';
import { DateService } from './../../../../core/services/date.service';
import { Project } from './../../../../core/models/project';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pledge-more',
  templateUrl: './pledge-more.component.html',
  styleUrls: ['./pledge-more.component.scss']
})
export class PledgeMoreComponent implements OnInit {

  amount: number;
  @Input() project: Project;
  isAmountValid: boolean;
  addressForm: FormGroup;
  @ViewChild('lgModal') lgModal;
  selectedRewardIndex: number;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private userActions: UserActions
  ) {
    this.isAmountValid = true;
  }

  ngOnInit() {
    this.addressForm = this.initAddressForm();
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

  enterAddress(i) {
    this.lgModal.show();
    this.selectedRewardIndex = i;
  }

  saveAddress() {
    this.lgModal.hide();
    this.addressForm.patchValue({
      id: this.project.user.id
    });
    const address = this.addressForm.value;
    this.store.dispatch(this.userActions.updateUser(address));
    this.onContinue(this.selectedRewardIndex);
  }

  ifAddressPresent() {
    return this.project.user.address ? true : false;
  }

  initAddressForm() {
    return this.fb.group({
      'id': [null],
      'address_attributes': this.fb.group({
        'id': [],
        'street_address': ['', Validators.required],
        'city': ['', Validators.required],
        'postcode': ['', Validators.required],
        'country': ['', Validators.required]
      })
    });
  }

}
