import { User } from './../../../../core/models/user';
import { UserService } from './../../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent implements OnInit {

  @Input() user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  isAuthUser() {
    return this.userService.isLoggedInUser(this.user);
  }

}
