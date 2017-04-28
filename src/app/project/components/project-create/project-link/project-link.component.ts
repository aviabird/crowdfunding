import { getDraftProject } from './../../../reducers/project.selector';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../app.state';
import { ProjectActions } from './../../../actions/project.actions';
import { Subscription } from 'rxjs/Subscription';
import { ProjectService } from './../../../services/project.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-link',
  templateUrl: './project-link.component.html',
  styleUrls: ['./project-link.component.scss']
})
export class ProjectLinkComponent implements OnInit {

  private projectSub: Subscription = new Subscription();

  formSubmit = false;
  linkForm: FormGroup;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private actions: ProjectActions,
    private store: Store<AppState>
    ) {
    this.projectSub = this.store.select(getDraftProject).subscribe((project) => {
      this.initLinkForm(project);
    });
  }

  ngOnInit() {
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
      this.store.dispatch(this.actions.saveDraft(data));
    }
  }

  private initLinkForm(project) {
    this.linkForm = this.projectService.initLinkForm(project);
  }

}
