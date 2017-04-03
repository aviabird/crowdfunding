import { Project } from './../../../../core/models/project';
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
  currentIndex: number;
  project_id: string;

  constructor(private projectService: ProjectService, private fb: FormBuilder) {
    this.project_id = localStorage.getItem('current_project_id');
    this.fetchOrInitProject();
  }

  ngOnInit() {
  }

  handleOnChange(event, index) {
    this.currentIndex = index;
    const files: any = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    const files_list = [];
    const pattern = /image-*/;
    for (let i = 0; i < files.length; i++) {
      files_list.push(files[i]);
    }
    files_list.forEach((file: File) => {
      if (!file.type.match(pattern)) {
        alert('Remove non image format files');
        return;
      }
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    });
  }

  private handleReaderLoaded(e) {
    const reader = e.target;
    const imageUrl = reader.result;
    (<FormArray>this.storyForm.controls['sections_attributes']).controls[this.currentIndex].patchValue({
      'image_data': imageUrl
    });
    // this.uploadMedia(imageUrl);
  }

  onAddSection() {
    (<FormArray>this.storyForm.controls['sections_attributes']).push(
      this.fb.group({
        'heading': ['', Validators.required],
        'description': ['', Validators.required],
        'image_url': ['', Validators.required],
        'image_data': ['', Validators.required]
      })
    );
  }

  onSubmit() {
    // this.storyForm.controls['project_id'].setValue(project_id);
    const data = {
      'id': this.project_id,
      'type': 'story',
      'story_attributes': this.storyForm.value
    };

    console.log('data', data);
    this.projectService.createProject(data).subscribe((res) => {
      console.log('res', res);
    });
  }

  private fetchOrInitProject() {
    this.storyForm = this.projectService.initStoryForm();
    if (this.project_id) {
      this.projectService.fetchProject(this.project_id).subscribe((project) => {
        this.storyForm = this.projectService.initStoryForm(project);
      });
    }
  }

}
