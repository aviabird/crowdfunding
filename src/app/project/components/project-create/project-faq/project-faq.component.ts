import { ProjectService } from './../../../services/project.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-faq',
  templateUrl: './project-faq.component.html',
  styleUrls: ['./project-faq.component.scss']
})
export class ProjectFaqComponent implements OnInit {

  faqForm: FormGroup;
  project_id: string;
  @Output() nextTab: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private projectService: ProjectService, private fb: FormBuilder) {
    this.project_id = localStorage.getItem('current_project_id');
    this.fetchOrInitProject();
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
        'project_id': [this.project_id, Validators.required]
      })
    );
  }

  onSubmit() {
    this.nextTab.emit(true);
    const data = this.faqForm.value;
    this.projectService.createProject(data).subscribe((res) => {
      console.log('res', res);
      this.faqForm = this.projectService.initFaqForm(res);
    });

  }

  private fetchOrInitProject() {
    this.faqForm = this.projectService.initFaqForm();
    if (this.project_id) {
      this.projectService.fetchProject(this.project_id).subscribe((project) => {
        this.faqForm = this.projectService.initFaqForm(project);
      });
    }
  }

}
