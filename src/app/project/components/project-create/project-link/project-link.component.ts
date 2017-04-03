import { ProjectService } from './../../../services/project.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-link',
  templateUrl: './project-link.component.html',
  styleUrls: ['./project-link.component.scss']
})
export class ProjectLinkComponent implements OnInit {

  linkForm: FormGroup;
  project_id: number;

  constructor(private projectService: ProjectService, private fb: FormBuilder) {
    this.project_id = JSON.parse(localStorage.getItem('current_project_id'));
    this.linkForm = this.projectService.initLinkForm(this.project_id);
  }

  ngOnInit() {
  }

  onAddLink() {
    (<FormArray>this.linkForm.controls['links_attributes']).push(
      this.fb.group({
        'id': [''],
        'url': ['', Validators.required],
        'project_id': [this.project_id, Validators.required]
      })
    );
  }

  onSubmit() {
    const data = this.linkForm.value;
    console.log('data', data);
  }

}
