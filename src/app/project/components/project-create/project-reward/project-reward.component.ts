import { Reward } from './../../../../core/models/reward';
import { RewardFormService } from './../../../services/forms/reward-form.service';
import { ImageUploadComponent } from './../../../../shared/components/image-upload/image-upload.component';
import { getDraftProject, getSelectedProject } from './../../../reducers/project.selector';
import { Subscription } from 'rxjs/Subscription';
import { ProjectActions } from './../../../actions/project.actions';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-project-reward',
  templateUrl: './project-reward.component.html',
  styleUrls: ['./project-reward.component.scss']
})
export class ProjectRewardComponent implements OnInit, OnDestroy {

  private projectSub$: Subscription = new Subscription();
  @Input() isEditing;
  formSubmit = false;
  rewardForm: FormGroup;
  selectedDate: Date[] = [];
  countries = [
    'Australia', 'Canada', 'Denmark', 'Finland', 'France', 'Ireland', 'Japan', 'Norway', 'Singapore',
    'Spain', 'Sweden', 'United Kingdom', 'United States', 'Austria', 'Belgium', 'Germany', 'Hong Kong',
    'Italy', 'Luxembourg', 'Netherlands', 'New Zealand', 'Portugal', 'Switzerland', 'Brazil', 'Mexico'
  ];

  constructor(
    private rewardFormService: RewardFormService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private actions: ProjectActions
  ) { }

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

  getRewards() {
    return (<FormArray>this.rewardForm.get('rewards_attributes')).controls;
  }

  removeReward(index, id) {
    if (!id) {
      this.selectedDate.pop();
      (<FormArray>this.rewardForm.controls['rewards_attributes']).removeAt(index);
      return;
    }

    this.setDeliveryDates();
    (<FormArray>this.rewardForm.controls['rewards_attributes']).controls[index].patchValue({
      '_destroy': true
    });
    const data = this.rewardForm.value;
    if (!this.isEditing) {
      this.store.dispatch(this.actions.removeFromDraft(data));
    } else {
      this.store.dispatch(this.actions.updateProject(data));
    }
  }

  onAddReward() {
    const reward = new Reward;
    const fg = this.rewardFormService.initFormGroup(reward);
    (<FormArray>this.rewardForm.controls['rewards_attributes']).push(fg);
    this.selectedDate.push(new Date());
  }

  onSubmit() {
    this.setDeliveryDates();
    this.formSubmit = true;
    const data = this.rewardForm.value;
    if (this.rewardForm.valid && this.validatePouchDates()) {
      if (!this.isEditing) {
        this.store.dispatch(this.actions.saveDraft(data));
      } else {
        this.store.dispatch(this.actions.updateProject(data));
      }
    }
  }

  addNewLocation(index) {
    (<FormArray>(<FormArray>this.rewardForm.controls['rewards_attributes'])
      .controls[index]
      .get('shipping_locations_attributes'))
      .push(this.fb.group({
        'id': [null],
        'location': [''],
        'shipping_fee': ['']
      }));
  }

  validatePouchDates() {
    let i: number;
    for (i = 0; i < this.selectedDate.length; i++) {
      if (this.validateDeliveryDate(i) === true) {
        return false;
      }
    }
    return true;
  }

  validateDeliveryDate(i) {
    let startDate = this.rewardFormService.project.start_date || new Date();
    startDate = new Date(startDate);
    return this.selectedDate[i] > startDate ? false : true;
  }

  private setDeliveryDates() {
    (<FormArray>this.rewardForm.controls['rewards_attributes']).controls.forEach((control, index) => {
      control.get('delivery_date').setValue(this.selectedDate[index]);
    });
  }

  private initRewardForm(project) {
    this.rewardForm = this.rewardFormService.initRewardForm(project);
    this.setSelectedDates(project);
  }

  private setSelectedDates(project) {
    this.selectedDate = [];
    project.rewards.forEach((reward, index) => {
      const date = reward.delivery_date;
      this.selectedDate[index] = new Date(date);
    });
  }

  ngOnDestroy() {
    this.projectSub$.unsubscribe();
  }

}
