import { ToastyService } from 'ng2-toasty';
import { ProjectHttpService } from './../../../project/services/http/project-http.service';
import { UserService } from './../../services/user.service';
import { User } from './../../../core/models/user';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-campaigns',
  templateUrl: './user-campaigns.component.html',
  styleUrls: ['./user-campaigns.component.scss']
})
export class UserCampaignsComponent implements OnInit {

  @Input() user: User;
  projectId: number;
  description: string;
  @ViewChild('lgModal') lgModal;

  constructor(
    private userService: UserService,
    private projectHttpServie: ProjectHttpService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
  }

  isAuthUser() {
    return this.userService.isLoggedInUser(this.user);
  }

  sendNotification() {
    this.lgModal.hide();
    this.projectHttpServie.sendNotification(this.projectId, this.description).subscribe((res) => {
      this.toastyService.success(res.message);
    });
  }

}
