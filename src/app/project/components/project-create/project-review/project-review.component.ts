import { ProjectService } from './../../../services/project.service';
import { Project } from './../../../../core/models/project';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-review',
  templateUrl: './project-review.component.html',
  styleUrls: ['./project-review.component.scss']
})
export class ProjectReviewComponent implements OnInit {

  project_id: string;
  project: Project;

  constructor(private projectService: ProjectService, private router: Router) {
    this.project_id = localStorage.getItem('current_project_id');
    this.fetchProject();
  }

  ngOnInit() {
  }

  private fetchProject() {
    if (this.project_id) {
      this.projectService.fetchProject(this.project_id).subscribe((project) => {
        this.project = project;
      });
    }
  }

  onLaunch() {
    alert('Your Project is sent for review');
    this.router.navigate(['/']);
  }

}
