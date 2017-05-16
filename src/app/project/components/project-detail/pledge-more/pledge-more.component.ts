import { Address } from './../../../../core/models/address';
import { UserService } from './../../../../user/services/user.service';
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
  address: Address;

  countries = [
    'Australia', 'Canada', 'Denmark', 'Finland', 'France', 'Ireland', 'Japan', 'Norway', 'Singapore',
    'Spain', 'Sweden', 'United Kingdom', 'United States', 'Austria', 'Belgium', 'Germany', 'Hong Kong',
    'Italy', 'Luxembourg', 'Netherlands', 'New Zealand', 'Portugal', 'Switzerland', 'Brazil', 'Mexico'
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private userActions: UserActions,
    private userService: UserService
  ) {
    this.isAmountValid = true;
  }

  ngOnInit() {
    this.addressForm = this.initAddressForm();
  }

  onContinue(index) {
    const reward: Reward = this.project.rewards[index];
    this.isAmountValid = this.amount < reward.amount || typeof this.amount === 'undefined' ? false : true;

    if (this.isAmountValid) {
      const shippingAmount = this.findShippingAmount(index);
      this.router.navigate(['/projects', this.project.id, 'payment'], {
        queryParams: {
          'amount': this.amount,
          'shippingAmount': shippingAmount,
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
    this.userService.updateUser(address).subscribe((user) => {
      this.address = user.address;
      this.onContinue(this.selectedRewardIndex);
    });
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
        'country': ['Australia', Validators.required]
      })
    });
  }

  findShippingAmount(index) {
    let shippingAmount;
    const shippingCountry = this.address ? this.address.country : this.project.user.address.country;
    const shippingLocations = this.project.rewards[index].shipping_locations;
    shippingLocations.forEach((location) => {
      if (location.location === shippingCountry) {
        shippingAmount = location.shipping_fee;
        return;
      } else if (location.location === 'anywhere') {
        shippingAmount = location.shipping_fee;
      }
    });
    return shippingAmount;
  }

  isRewardValid(index: number) {
    return this.getLeftRewards(index) > 0 ? true : false;
  }

  getLeftRewards(index: number) {
    const reward: Reward = this.project.rewards[index];
    const rewardsLeft = reward.quantity - reward.backers_count;
    return rewardsLeft;
  }

  printRewardCount(index: number) {
    const reward: Reward = this.project.rewards[index];
    return `Limited (${this.getLeftRewards(index)} left of ${reward.quantity})`;
  }

}
