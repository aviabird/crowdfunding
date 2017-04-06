import { ProjectActions } from './../../../actions/project.actions';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { getDraftProject } from './../../../reducers/selectors';
import { Subscription } from 'rxjs/Subscription';
import { ProjectService } from './../../../services/project.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-project-faq',
  templateUrl: './project-faq.component.html',
  styleUrls: ['./project-faq.component.scss']
})
export class ProjectFaqComponent implements OnInit, OnDestroy {

  private projectSub: Subscription = new Subscription();

  formSubmit = false;
  faqForm: FormGroup;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private actions: ProjectActions
    ) {
    this.projectSub = this.store.select(getDraftProject).subscribe((project) => {
      this.initFaqForm(project);
    });
  }

  getFaqs() {
    return (<FormArray>this.faqForm.get('faqs_attributes')).controls;
  }

  ngOnInit() {
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
      this.store.dispatch(this.actions.saveDraft(data));
    }
  }

  private initFaqForm(project) {
    this.faqForm = this.projectService.initFaqForm(project);
  }

  ngOnDestroy() {
    this.projectSub.unsubscribe();
  }

}
