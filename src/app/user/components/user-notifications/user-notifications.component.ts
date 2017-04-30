import { UserService } from './../../services/user.service';
import { Notification } from './../../../core/models/notification';
import { User } from './../../../core/models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.scss']
})
export class UserNotificationsComponent implements OnInit {

  selectedNotification: Notification;
  @Input() user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  selectNotification(notification: Notification) {
    this.selectedNotification = notification;
    this.userService.readNotification(notification.id).subscribe();
  }

}
