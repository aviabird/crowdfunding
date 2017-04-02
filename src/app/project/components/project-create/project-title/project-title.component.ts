import { ProjectService } from './../../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-title',
  templateUrl: './project-title.component.html',
  styleUrls: ['./project-title.component.scss']
})
export class ProjectTitleComponent implements OnInit {

  projectForm: FormGroup;

  constructor(private projectService: ProjectService) {
    this.projectForm = this.projectService.initProjectForm();
  }

  ngOnInit() {
  }

}
