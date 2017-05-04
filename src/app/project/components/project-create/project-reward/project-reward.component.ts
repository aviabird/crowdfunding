import { RewardFormService } from './../../../services/forms/reward-form.service';
import { ImageUploadComponent } from './../../../../shared/components/image-upload/image-upload.component';
import { getDraftProject, getSelectedProject } from './../../../reducers/project.selector';
import { Subscription } from 'rxjs/Subscription';
import { ProjectActions } from './../../../actions/project.actions';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, OnDestroy, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-project-reward',
  templateUrl: './project-reward.component.html',
  styleUrls: ['./project-reward.component.scss']
})
export class ProjectRewardComponent implements OnInit, OnDestroy, AfterViewInit {

  private projectSub$: Subscription = new Subscription();
  @ViewChildren(ImageUploadComponent) imageUploadChildren: QueryList<ImageUploadComponent>;
  @Input() isEditing;
  imageUploadChildrenArray: Array<ImageUploadComponent>;

  formSubmit = false;
  rewardForm: FormGroup;

  constructor(
    private rewardFormService: RewardFormService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private actions: ProjectActions
  ) {}

  ngOnInit() {
    if (this.isEditing) {
      this.projectSub$ = this.store.select(getSelectedProject).subscribe((project) => {
        this.initRewardForm(project);
      });
    } else {
      this.projectSub$ = this.store.select(getDraftProject).subscribe((project) => {
        this.initRewardForm(project);
      });
    }
  }

  ngAfterViewInit() {
    this.imageUploadChildrenArray = this.imageUploadChildren.toArray();
    this.imageUploadChildren.changes.subscribe(childern => {
      this.imageUploadChildrenArray = childern.toArray();
    });
  }

  getRewards() {
    return (<FormArray>this.rewardForm.get('rewards_attributes')).controls;
  }

  setImageData(image, index) {
    (<FormArray>this.rewardForm.controls['rewards_attributes']).controls[index].patchValue({
      'image_data': image
    });
  }

  removeReward(index, id) {
    if (!id) {
      return (<FormArray>this.rewardForm.controls['rewards_attributes']).removeAt(index);
    }

    (<FormArray>this.rewardForm.controls['rewards_attributes']).controls[index].patchValue({
      '_destroy': true
    });
    this.onSubmit();
  }

  uploadImage(index) {
    this.imageUploadChildrenArray[index].showImageBrowseDlg();
  }

  onAddReward() {
    (<FormArray>this.rewardForm.controls['rewards_attributes']).push(
      this.fb.group({
        'id': [null],
        'title': ['', Validators.required],
        'description': ['', Validators.required],
        'image_url': [''],
        'image_data': [''],
        'amount': [null, Validators.required],
      })
    );
  }

  onSubmit() {
    this.formSubmit = true;
    const data = this.rewardForm.value;
    if (this.rewardForm.valid) {
      if (!this.isEditing) {
        this.store.dispatch(this.actions.saveDraft(data));
      } else {
        this.store.dispatch(this.actions.updateProject(data));
      }
    }
  }

  private initRewardForm(project) {
    this.rewardForm = this.rewardFormService.initRewardForm(project);
  }

  ngOnDestroy() {
    this.projectSub$.unsubscribe();
  }

}
