import { Address } from './../../../../core/models/address';
import { UserActions } from './../../../actions/user.actions';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from './../../../../core/models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  @Input() user: User;
  basicInfoForm: FormGroup;
  edited: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private userActions: UserActions
  ) { }

  ngOnInit() {
  }

  editBasicInfo() {
    this.basicInfoForm = this.initForm();
    console.log('form', this.basicInfoForm.value);
    this.edited = true;
  }

  saveBasicInfo() {
    const user = this.basicInfoForm.value;
    this.store.dispatch(this.userActions.updateUser(user));
    this.edited = false;
  }

  initForm() {
    const address = this.user.address ? this.user.address : new Address;

    return this.fb.group({
      'id': [this.user.id],
      'name': [this.user.name],
      'address_attributes': this.fb.group({
        'id': [address.id],
        'street_address': [address.street_address, Validators.required],
        'city': [address.city, Validators.required],
        'postcode': [address.postcode, Validators.required],
        'country': [address.country, Validators.required]
      })
    });
  }


}
