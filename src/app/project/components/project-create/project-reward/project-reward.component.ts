import { ProjectActions } from './../../../actions/project.actions';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { getDraftProject } from './../../../reducers/selectors';
import { ProjectService } from './../../../services/project.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-reward',
  templateUrl: './project-reward.component.html',
  styleUrls: ['./project-reward.component.scss']
})
export class ProjectRewardComponent implements OnInit {

  @Output() nextTab: EventEmitter<boolean> = new EventEmitter<boolean>();

  rewardForm: FormGroup;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private actions: ProjectActions
  ) {
    this.store.select(getDraftProject).subscribe((project) => {
      this.initRewardForm(project);
    });
  }

  ngOnInit() {
  }

  getRewards() {
    return (<FormArray>this.rewardForm.get('rewards_attributes')).controls;
  }

  setImageData(image, index) {
    (<FormArray>this.rewardForm.controls['rewards_attributes']).controls[index].patchValue({
      'image_data': image
    });
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
      })
    );
  }

  onSubmit() {
    const data = this.rewardForm.value;
    this.store.dispatch(this.actions.saveDraft(data));
    this.nextTab.emit(true);
  }

  private initRewardForm(project) {
    this.rewardForm = this.projectService.initRewardForm(project);

  }


}
