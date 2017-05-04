import { LinkFormService } from './../../../services/forms/link-form.service';
import { getDraftProject, getSelectedProject } from './../../../reducers/project.selector';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../app.state';
import { ProjectActions } from './../../../actions/project.actions';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-project-link',
  templateUrl: './project-link.component.html',
  styleUrls: ['./project-link.component.scss']
})
export class ProjectLinkComponent implements OnInit, OnDestroy {

  private projectSub$: Subscription = new Subscription();
  @Input() isEditing;

  formSubmit = false;
  linkForm: FormGroup;

  constructor(
    private linkFormService: LinkFormService,
    private fb: FormBuilder,
    private actions: ProjectActions,
    private store: Store<AppState>
    ) {}

  ngOnInit() {
    if (this.isEditing) {
      this.projectSub$ = this.store.select(getSelectedProject).subscribe((project) => {
        this.initLinkForm(project);
      });
    } else {
      this.projectSub$ = this.store.select(getDraftProject).subscribe((project) => {
        this.initLinkForm(project);
      });
    }
  }

  getLinks() {
    return (<FormArray>this.linkForm.get('links_attributes')).controls;
  }

  onAddLink() {
    (<FormArray>this.linkForm.controls['links_attributes']).push(
      this.fb.group({
        'id': [''],
        'url': ['', Validators.required],
      })
    );
  }

  onSubmit() {
    this.formSubmit = true;
    const data = this.linkForm.value;
    if (this.linkForm.valid) {
      if (!this.isEditing) {
        this.store.dispatch(this.actions.saveDraft(data));
      } else {
        this.store.dispatch(this.actions.updateProject(data));
      }
    }
  }

  private initLinkForm(project) {
    this.linkForm = this.linkFormService.initLinkForm(project);
  }

  ngOnDestroy() {
    this.projectSub$.unsubscribe();
  }

}
