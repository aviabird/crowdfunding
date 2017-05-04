import { FaqFormService } from './../../../services/forms/faq-form.service';
import { getDraftProject, getSelectedProject } from './../../../reducers/project.selector';
import { ProjectActions } from './../../../actions/project.actions';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-project-faq',
  templateUrl: './project-faq.component.html',
  styleUrls: ['./project-faq.component.scss']
})
export class ProjectFaqComponent implements OnInit, OnDestroy {

  private projectSub$: Subscription = new Subscription();
  @Input() isEditing;

  formSubmit = false;
  faqForm: FormGroup;

  constructor(
    private faqFormService: FaqFormService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private actions: ProjectActions
    ) {}

  getFaqs() {
    return (<FormArray>this.faqForm.get('faqs_attributes')).controls;
  }

  ngOnInit() {
    if (this.isEditing) {
      this.projectSub$ = this.store.select(getSelectedProject).subscribe((project) => {
        this.initFaqForm(project);
      });
    } else {
      this.projectSub$ = this.store.select(getDraftProject).subscribe((project) => {
        this.initFaqForm(project);
      });
    }
  }

  onAddFaq() {
    (<FormArray>this.faqForm.controls['faqs_attributes']).push(
      this.fb.group({
        'id': [''],
        'question': ['', Validators.required],
        'answer': ['', Validators.required],
      })
    );
  }

  onSubmit() {
    this.formSubmit = true;
    const data = this.faqForm.value;
    if (this.faqForm.valid) {
      if (!this.isEditing) {
        this.store.dispatch(this.actions.saveDraft(data));
      } else {
        this.store.dispatch(this.actions.updateProject(data));
      }
    }
  }

  private initFaqForm(project) {
    this.faqForm = this.faqFormService.initFaqForm(project);
  }

  ngOnDestroy() {
    this.projectSub$.unsubscribe();
  }

}
