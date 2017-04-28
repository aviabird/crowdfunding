import { getDraftProject } from './../../../reducers/project.selector';
import { ProjectActions } from './../../../actions/project.actions';
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

  private projectSub: Subscription = new Subscription();

  formSubmit = false;
  projectForm: FormGroup;
  categories = [];
  days = Array.from(new Array(31), ( val, index) => index + 1);
  months = new Array('January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December');

  constructor(private projectService: ProjectService, private actions: ProjectActions, private store: Store<AppState>) {
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

  isImagePresent() {
    const imageUrl = this.projectForm.get('image_url').value;
    const imageData = this.projectForm.get('image_data').value;
    if (imageUrl || imageData) {
      return true;
    } else {
      return false;
    }
  }

  submitProject() {
    this.formSubmit = true;
    const project = this.projectForm.value;
    if (this.projectForm.valid && this.isImagePresent()) {
      this.store.dispatch(this.actions.saveDraft(project));
    }
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
