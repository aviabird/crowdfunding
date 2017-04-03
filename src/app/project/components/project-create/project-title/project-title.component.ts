import { Project } from './../../../../core/models/project';
import { ProjectService } from './../../../services/project.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-title',
  templateUrl: './project-title.component.html',
  styleUrls: ['./project-title.component.scss']
})
export class ProjectTitleComponent implements OnInit {

  projectForm: FormGroup;
  categories = [];
  project_id: string;
  @Output() nextTab: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private projectService: ProjectService) {
    this.project_id = localStorage.getItem('current_project_id');
    this.fetchCategories();
    this.fetchOrInitProject();
  }

  ngOnInit() {
  }

  handleOnChange(event) {
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
    (<FormControl>this.projectForm.controls['image_data']).setValue(imageUrl);
    // this.uploadMedia(imageUrl);
  }


  submitProject() {
    this.nextTab.emit(true);
    const project = this.projectForm.value;
    this.projectService.createProject(project).subscribe((res) => {
      localStorage.setItem('current_project_id', res.id);
    });
  }

  private fetchCategories() {
    this.projectService.fetchAllCategories().subscribe((data) => {
      this.categories = data;
      (<FormControl>this.projectForm.controls['category_id']).setValue(data[0].id);
    });
  }

  private fetchOrInitProject() {
    this.projectForm = this.projectService.initProjectForm();
    if (this.project_id) {
      this.projectService.fetchProject(this.project_id).subscribe((project) => {
        this.projectForm = this.projectService.initProjectForm(project);
      });
    }
  }

}
