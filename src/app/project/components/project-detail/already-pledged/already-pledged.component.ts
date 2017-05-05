import { DateService } from './../../../../core/services/date.service';
import { Project } from './../../../../core/models/project';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-already-pledged',
  templateUrl: './already-pledged.component.html',
  styleUrls: ['./already-pledged.component.scss']
})
export class AlreadyPledgedComponent implements OnInit {

  @Input() project: Project;

  constructor(private dateService: DateService) {}

  ngOnInit() {
  }

  daysToGo() {
    return this.dateService.daysBetweenDates(new Date(), this.project.end_date);
  }

}
