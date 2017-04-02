import { ProjectService } from './../../../services/project.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-story',
  templateUrl: './project-story.component.html',
  styleUrls: ['./project-story.component.scss']
})
export class ProjectStoryComponent implements OnInit {

  storyForm: FormGroup;

  constructor(private projectService: ProjectService, private fb: FormBuilder) {
    this.storyForm = this.projectService.initStoryForm();
  }

  ngOnInit() {
  }

  onAddSection() {
    (<FormArray>this.storyForm.controls['section_attributes']).push(
      this.fb.group({
        'heading': ['', Validators.required],
        'description': ['', Validators.required]
      })
    );
  }

  onSubmit() {
    const project_id = JSON.parse(localStorage.getItem('current_project_id'));
    this.storyForm.controls['project_id'].setValue(project_id);
    const data = this.storyForm.value;
    console.log('data', data);
    // this.projectService.createProject(data).subscribe((res) => {
    // });
  }


}
