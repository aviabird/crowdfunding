import { DateService } from './../../../../core/services/date.service';
import { RewardFormService } from './../../../services/forms/reward-form.service';
import { ImageUploadComponent } from './../../../../shared/components/image-upload/image-upload.component';
import { getDraftProject, getSelectedProject } from './../../../reducers/project.selector';
import { Subscription } from 'rxjs/Subscription';
import { ProjectActions } from './../../../actions/project.actions';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, OnDestroy, Input, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-project-reward',
  templateUrl: './project-reward.component.html',
  styleUrls: ['./project-reward.component.scss']
})
export class ProjectRewardComponent implements OnInit, OnDestroy {

  private projectSub$: Subscription = new Subscription();
  // @ViewChildren(ImageUploadComponent) imageUploadChildren: QueryList<ImageUploadComponent>;
  @Input() isEditing;
  // imageUploadChildrenArray: Array<ImageUploadComponent>;

  formSubmit = false;
  rewardForm: FormGroup;

  days: number[] = [];
  months: string[] = [];

  constructor(
    private rewardFormService: RewardFormService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private actions: ProjectActions,
    private dateService: DateService
  ) {
    this.days = dateService.getDays();
    this.months = dateService.getMonths();
  }

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

  // ngAfterViewInit() {
  //   this.imageUploadChildrenArray = this.imageUploadChildren.toArray();
  //   this.imageUploadChildren.changes.subscribe(childern => {
  //     this.imageUploadChildrenArray = childern.toArray();
  //   });
  // }

  getRewards() {
    return (<FormArray>this.rewardForm.get('rewards_attributes')).controls;
  }

  // setImageData(image, index) {
  //   (<FormArray>this.rewardForm.controls['rewards_attributes']).controls[index].patchValue({
  //     'image_data': image
  //   });
  // }

  removeReward(index, id) {
    if (!id) {
      return (<FormArray>this.rewardForm.controls['rewards_attributes']).removeAt(index);
    }

    (<FormArray>this.rewardForm.controls['rewards_attributes']).controls[index].patchValue({
      '_destroy': true
    });
    this.onSubmit();
  }

  // uploadImage(index) {
  //   this.imageUploadChildrenArray[index].showImageBrowseDlg();
  // }

  onAddReward() {
    const date = new Date();
    (<FormArray>this.rewardForm.controls['rewards_attributes']).push(
      this.fb.group({
        'id': [null],
        'title': ['', Validators.required],
        'description': ['', Validators.required],
        'delivery_date': [date],
        'day': [date.getDate()],
        'month': [this.dateService.months[date.getMonth()]],
        'year': [date.getFullYear()],
        'quantity': [null, Validators.required],
        'amount': [null, Validators.required],
      })
    );
  }

  onSubmit() {
    this.setDeliveryDates();
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

  private setDeliveryDates() {
    (<FormArray>this.rewardForm.controls['rewards_attributes']).controls.forEach((control) => {
      const reward = control.value;
      const date = this.dateService.createDate(reward.day, reward.month, reward.year);
      control.get('delivery_date').setValue(date);
    });
  }

  private initRewardForm(project) {
    this.rewardForm = this.rewardFormService.initRewardForm(project);
  }

  ngOnDestroy() {
    this.projectSub$.unsubscribe();
  }

}
