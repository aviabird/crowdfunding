import { Story } from './../../core/models/story';
import { Project } from './../../core/models/project';
import { HttpService } from './../../core/services/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {
  constructor(private fb: FormBuilder, private http: HttpService) { }

  initProjectForm(project = new Project) {
    // console.log('project_id', project.get_id);
    return this.fb.group({
      'id': [project.id],
      'type': ['project', Validators.required],
      'title': [project.title, Validators.required],
      'category_id': [project.category_id, Validators.required],
      'image_url': [project.image_url, Validators.required],
      'image_data': ['', Validators.required],
      'video_url': [project.video_url, Validators.required],
      'goal_amount': [project.goal_amount, Validators.required],
      'funding_model': [project.funding_model, Validators.required],
      'start_date': [project.start_date, Validators.required],
      'duration': [project.duration, Validators.required]
    });
  }

  initStoryForm(project = new Project) {
    const story = project.story || new Story;
    const section_attributes_array = [];
    story.sections.forEach(section => {
      section_attributes_array.push(
        this.fb.group({
          'id': section.id,
          'heading': section.heading,
          'description': section.description,
          'image_url': section.image_url
        })
      );
    });

    return this.fb.group({
      'id': [story && story.id, Validators.required],
      'sections_attributes': this.fb.array(section_attributes_array)
    });
  }

  initRewardForm(project_id: number) {
    return this.fb.group({
      'id': [project_id, Validators.required],
      'type': ['reward', Validators.required],
      'rewards_attributes': this.fb.array([
        this.fb.group({
          'id': [''],
          'title': ['', Validators.required],
          'description': ['', Validators.required],
          'image_url': [''],
          'image_data': [''],
          'amount': ['', Validators.required],
        })
      ])
    });
  }

  initFaqForm(project_id: number) {
    return this.fb.group({
      'type': ['faq', Validators.required],
      'faqs_attributes': this.fb.array([
        this.fb.group({
          'id': [''],
          'question': ['', Validators.required],
          'answer': ['', Validators.required],
        })
      ])
    });
  }

  initLinkForm(project_id: number) {
    return this.fb.group({
      'type': ['link', Validators.required],
      'links_attributes': this.fb.array([
        this.fb.group({
          'id': [''],
          'url': ['', Validators.required],
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

  fetchProject(id) {
    return this.http.get(
      `/api/v1/projects/${id}`
    ).map((res) => {
      console.log('response', res.json());
      return res.json();
    });
  }

}
