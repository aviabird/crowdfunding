import { getDraftProject } from './../../../reducers/selectors';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Project } from './../../../../core/models/project';
import { ProjectService } from './../../../services/project.service';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-project-title',
  templateUrl: './project-title.component.html',
  styleUrls: ['./project-title.component.scss']
})
export class ProjectTitleComponent implements OnInit, OnDestroy {

  @Output() nextTab: EventEmitter<boolean> = new EventEmitter<boolean>();

  private projectSub: Subscription = new Subscription();

  projectForm: FormGroup;
  categories = [];
  days = Array.from(new Array(31), ( val, index) => index + 1);
  months = new Array('January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December');

  constructor(private projectService: ProjectService, private store: Store<AppState>) {
    this.fetchCategories();
    this.store.select(getDraftProject).subscribe((project) => {
      this.initProjectForm(project);
    });
  }

  ngOnInit() {
  }

  setImageData(image) {
    (<FormControl>this.projectForm.controls['image_data']).setValue(image);
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

  private initProjectForm(project) {
    this.projectForm = this.projectService.initProjectForm(project);
  }

  ngOnDestroy() {
    this.projectSub.unsubscribe();
  }

}
