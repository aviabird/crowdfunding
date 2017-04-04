import { ProjectService } from './../../../services/project.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-link',
  templateUrl: './project-link.component.html',
  styleUrls: ['./project-link.component.scss']
})
export class ProjectLinkComponent implements OnInit {

  linkForm: FormGroup;
  project_id: string;
  @Output() nextTab: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private projectService: ProjectService, private fb: FormBuilder) {
    this.project_id = localStorage.getItem('current_project_id');
    this.fetchOrInitProject();
  }

  ngOnInit() {
  }

  getLinks() {
    return (<FormArray>this.linkForm.get('links_attributes')).controls;
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
    this.nextTab.emit(true);
    const data = this.linkForm.value;
    this.projectService.createProject(data).subscribe((res) => {
      console.log('res', res);
      this.linkForm = this.projectService.initLinkForm(res);
    });
  }

  private fetchOrInitProject() {
    this.linkForm = this.projectService.initLinkForm();
    if (this.project_id) {
      this.projectService.fetchProject(this.project_id).subscribe((project) => {
        this.linkForm = this.projectService.initLinkForm(project);
      });
    }
  }

}
