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

  constructor(private projectService: ProjectService, private fb: FormBuilder) {
    this.storyForm = this.projectService.initStoryForm();
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
    (<FormArray>this.storyForm.controls['section_attributes']).controls[this.currentIndex].patchValue({
      'image_data': imageUrl
    });
    // this.uploadMedia(imageUrl);
  }

  onAddSection() {
    (<FormArray>this.storyForm.controls['section_attributes']).push(
      this.fb.group({
        'heading': ['', Validators.required],
        'description': ['', Validators.required],
        'image_url': ['', Validators.required],
        'image_data': ['', Validators.required]
      })
    );
  }

  onSubmit() {
    const project_id = JSON.parse(localStorage.getItem('current_project_id'));
    this.storyForm.controls['project_id'].setValue(project_id);
    const data = this.storyForm.value;
    console.log('data', data);
    // this.projectService.createProject(data).subscribe((res) => {
    //   console.log('res', res);
    // });
  }


}
