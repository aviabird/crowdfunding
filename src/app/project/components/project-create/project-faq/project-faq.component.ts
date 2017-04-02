import { ProjectService } from './../../../services/project.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-faq',
  templateUrl: './project-faq.component.html',
  styleUrls: ['./project-faq.component.scss']
})
export class ProjectFaqComponent implements OnInit {

  faqForm: FormGroup;
  project_id: number;

  constructor(private projectService: ProjectService, private fb: FormBuilder) {
    this.project_id = JSON.parse(localStorage.getItem('current_project_id'));
    this.faqForm = this.projectService.initFaqForm(this.project_id);
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
    const data = this.faqForm.value;
    console.log('data', data);
  }

}
