import { HttpService } from './../../core/services/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {
  constructor(private fb: FormBuilder, private http: HttpService) {}

  initProjectForm() {
    return this.fb.group({
      'id': [''],
      'title': ['', Validators.required],
      'category_id': ['', Validators.required],
      'image_url': ['', Validators.required],
      'image_data': ['', Validators.required],
      'video_url': ['', Validators.required],
      'goal_amount': ['', Validators.required],
      'funding_model': ['', Validators.required],
      'start_date': ['', Validators.required],
      'duration': ['', Validators.required],
      'story': this.fb.group({}),
      'rewards': this.fb.array([]),
      'faqs': this.fb.array([]),
      'links': this.fb.array([]),
      'events': this.fb.array([])
    });
  }

  fetchAllCategories() {
    return this.http.get(
      'api/v1/category'
    ).map(res => {
      return res.json();
    });
  }

  createProject(project) {
    return this.http.post(
      'api/v1/projects',
      project
    ).map((res) => {
      console.log('response', res.json());
    });
  }

}
