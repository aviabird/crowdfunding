import { ImageUploadComponent } from './../../../../shared/components/image-upload/image-upload.component';
import { StoryFormService } from './../../../services/forms/story-form.service';
import { getDraftProject, getSelectedProject } from './../../../reducers/project.selector';
import { ProjectActions } from './../../../actions/project.actions';
import { Subscription } from 'rxjs/Subscription';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { Project } from './../../../../core/models/project';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, OnDestroy, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-project-story',
  templateUrl: './project-story.component.html',
  styleUrls: ['./project-story.component.scss']
})
export class ProjectStoryComponent implements OnInit, OnDestroy, AfterViewInit {

  private projectSub$: Subscription = new Subscription();
  @Input() isEditing;
  @ViewChildren(ImageUploadComponent) imageUploadChildren: QueryList<ImageUploadComponent>;
  imageUploadChildrenArray: Array<ImageUploadComponent>;


  formSubmit = false;
  storyForm: FormGroup;
  projectForm: FormGroup;

  constructor(
    private storyFormService: StoryFormService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private actions: ProjectActions
  ) {}

  ngOnInit() {
    if (this.isEditing) {
      this.projectSub$ = this.store.select(getSelectedProject).subscribe((project) => {
        this.initStoryForm(project);
      });
    } else {
      this.projectSub$ = this.store.select(getDraftProject).subscribe((project) => {
        this.initStoryForm(project);
      });
    }
  }

  ngAfterViewInit() {
    this.imageUploadChildrenArray = this.imageUploadChildren.toArray();
    this.imageUploadChildren.changes.subscribe(childern => {
      this.imageUploadChildrenArray = childern.toArray();
    });
  }

  getSections() {
    return (<FormArray>this.storyForm.get('sections_attributes')).controls;
  }

  setImageData(image, index) {
    (<FormArray>this.storyForm.get('sections_attributes')).controls[index].patchValue({
      'image_data': image
    });
  }

  uploadImage(index) {
    this.imageUploadChildrenArray[index].showImageBrowseDlg();
  }

  onAddSection() {
    (<FormArray>this.storyForm.get('sections_attributes')).push(
      this.fb.group({
        'id': [null],
        'heading': ['', Validators.required],
        'description': ['', Validators.required],
        'image_url': [''],
        'image_data': [''],
        '_destroy': [false]
      })
    );
  }

  removeSection(index, id) {
    if (!id) {
      return (<FormArray>this.storyForm.controls['sections_attributes']).removeAt(index);
    }

    (<FormArray>this.storyForm.controls['sections_attributes']).controls[index].patchValue({
      '_destroy': true
    });
    const data = this.storyForm.value;
    if (!this.isEditing) {
      this.store.dispatch(this.actions.removeFromDraft(data));
    } else {
      this.store.dispatch(this.actions.updateProject(data));
    }
  }

  onSubmit() {
    this.formSubmit = true;
    const data = this.projectForm.value;
    if (this.storyForm.valid) {
      if (!this.isEditing) {
        this.store.dispatch(this.actions.saveDraft(data));
      } else {
        this.store.dispatch(this.actions.updateProject(data));
      }
    }
  }

  private initStoryForm(project) {
    this.projectForm = this.storyFormService.initStoryForm(project);
    this.storyForm = <FormGroup>this.projectForm.get('story_attributes');
  }

  ngOnDestroy() {
    this.projectSub$.unsubscribe();
  }

}
