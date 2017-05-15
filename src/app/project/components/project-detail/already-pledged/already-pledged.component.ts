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

  constructor(private dateService: DateService) { }

  ngOnInit() {
  }

  daysToGo() {
    return this.dateService.daysBetweenDates(new Date(), this.project.end_date);
  }

  selectPouchImage() {
    const fundingPercentile: number = +this.project.percent_funded;
    if (fundingPercentile < 1) {
      return 'pouch-big-empty';
    } else if (fundingPercentile >= 1 && fundingPercentile <= 50) {
      return 'pouch-big-half';
    } else if (fundingPercentile >= 51 && fundingPercentile <= 99) {
      return 'pouch-big-almost-full';
    } else if (fundingPercentile > 99) {
      return 'pouch-big-full';
    }
  }

}
