import { ToastyService } from 'ng2-toasty';
import { ProjectHttpService } from './../../../services/http/project-http.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-report-project',
  templateUrl: './report-project.component.html',
  styleUrls: ['./report-project.component.scss']
})
export class ReportProjectComponent implements OnInit {

  reportReason: string;
  @ViewChild('lgModal') lgModal;
  @Input() projectId: number;

  constructor(
    private projectHttpService: ProjectHttpService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
  }

  reportProject() {
    this.lgModal.hide();
    this.projectHttpService.reportProject(this.reportReason, this.projectId).subscribe((res) => {
      this.toastyService.success(res.message);
      this.reportReason = '';
    });
  }

}
