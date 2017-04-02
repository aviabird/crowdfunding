import { HttpService } from './../../core/services/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {
  constructor(private fb: FormBuilder, private http: HttpService) {}

  initProjectForm() {
    return this.fb.group({
      'id': [''],
      'type': ['project', Validators.required],
      'title': ['', Validators.required],
      'category_id': ['', Validators.required],
      'image_url': ['', Validators.required],
      'image_data': ['', Validators.required],
      'video_url': ['', Validators.required],
      'goal_amount': ['', Validators.required],
      'funding_model': ['', Validators.required],
      'start_date': ['', Validators.required],
      'duration': ['', Validators.required]
    });
  }

  initStoryForm() {
    return this.fb.group({
      'id': [''],
      'type': ['story', Validators.required],
      'project_id': ['', Validators.required],
      'section_attributes': this.fb.array([
        this.fb.group({
          'heading': ['', Validators.required],
          'description': ['', Validators.required],
          'image_url': ['', Validators.required],
          'image_data': ['', Validators.required]
        })
      ])
    });
  }

  fetchAllCategories() {
    return this.http.get(
      'api/v1/category'
    ).map(res => {
      return res.json();
    });
  }

  createProject(params) {
    return this.http.post(
      'api/v1/projects',
      params
    ).map((res) => {
      console.log('response', res.json());
      return res.json();
    });
  }

}
