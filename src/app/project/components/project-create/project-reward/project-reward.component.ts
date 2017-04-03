import { ProjectService } from './../../../services/project.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-reward',
  templateUrl: './project-reward.component.html',
  styleUrls: ['./project-reward.component.scss']
})
export class ProjectRewardComponent implements OnInit {

  rewardForm: FormGroup;
  project_id: string;
  currentIndex: number;

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
    (<FormArray>this.rewardForm.controls['rewards_attributes']).controls[this.currentIndex].patchValue({
      'image_data': imageUrl
    });
    // this.uploadMedia(imageUrl);
  }


  onAddReward() {
    (<FormArray>this.rewardForm.controls['rewards_attributes']).push(
      this.fb.group({
        'id': [''],
        'title': ['', Validators.required],
        'description': ['', Validators.required],
        'image_url': [''],
        'image_data': [''],
        'amount': ['', Validators.required],
        'project_id': [this.project_id, Validators.required]
      })
    );
  }

  onSubmit() {
    const data = this.rewardForm.value;
    this.projectService.createProject(data).subscribe((res) => {
      console.log('res', res);
      this.rewardForm = this.projectService.initRewardForm(res);
    });
  }

  private fetchOrInitProject() {
    this.rewardForm = this.projectService.initRewardForm();
    if (this.project_id) {
      this.projectService.fetchProject(this.project_id).subscribe((project) => {
        this.rewardForm = this.projectService.initRewardForm(project);
      });
    }
  }


}
