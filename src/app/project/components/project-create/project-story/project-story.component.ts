import { ProjectActions } from './../../../actions/project.actions';
import { Subscription } from 'rxjs/Subscription';
import { getDraftProject } from './../../../reducers/selectors';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { Project } from './../../../../core/models/project';
import { ProjectService } from './../../../services/project.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-project-story',
  templateUrl: './project-story.component.html',
  styleUrls: ['./project-story.component.scss']
})
export class ProjectStoryComponent implements OnInit, OnDestroy {

  private projectSub: Subscription = new Subscription();

  formSubmit = false;
  storyForm: FormGroup;
  projectForm: FormGroup;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private actions: ProjectActions
  ) {
    this.projectSub = this.store.select(getDraftProject).subscribe((project) => {
      this.initStoryForm(project);
    });
  }

  ngOnInit() {
  }

  getSections() {
    return (<FormArray>this.storyForm.get('sections_attributes')).controls;
  }

  setImageData(image, index) {
    (<FormArray>this.storyForm.get('sections_attributes')).controls[index].patchValue({
      'image_data': image
    });
  }

  onAddSection() {
    (<FormArray>this.storyForm.get('sections_attributes')).push(
      this.fb.group({
        'id': [''],
        'heading': ['', Validators.required],
        'description': ['', Validators.required],
        'image_url': [''],
        'image_data': ['', Validators.required]
      })
    );
  }

  onSubmit() {
    this.formSubmit = true;
    const data = this.projectForm.value;
    if (this.storyForm.valid) {
      this.store.dispatch(this.actions.saveDraft(data));
    }
  }

  private initStoryForm(project) {
    this.projectForm = this.projectService.initStoryForm(project);
    this.storyForm = <FormGroup>this.projectForm.get('story_attributes');
  }

  ngOnDestroy() {
    this.projectSub.unsubscribe();
  }

}
