import { Subscription } from 'rxjs/Subscription';
import { ProjectHttpService } from './../../../services/http/project-http.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit, OnDestroy {

  @Input() projectId: number;
  backers = [];
  backerSubscription$: Subscription;

  constructor(private httpService: ProjectHttpService) { }

  ngOnInit() {
    this.backerSubscription$ = this.httpService.fetchProjectBackers(this.projectId)
      .subscribe((data) => this.backers = data);
  }

  ngOnDestroy() {
    this.backerSubscription$.unsubscribe();
  }

}
