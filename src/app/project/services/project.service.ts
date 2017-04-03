import { Link } from './../../core/models/link';
import { Faq } from './../../core/models/faq';
import { Reward } from './../../core/models/reward';
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

  initRewardForm(project = new Project) {
    let rewards = project.rewards;
    if (!rewards.length) {
      rewards = [new Reward];
    }

    const reward_attributes_array = [];
    rewards.forEach((reward: any) => {
      reward_attributes_array.push(
        this.fb.group({
          'id': reward.id,
          'title': reward.title,
          'description': reward.description,
          'image_url': reward.image_url,
          'image_data': '',
          'amount': reward.amount,
        })
      );
    });

    return this.fb.group({
      'id': [project.id, Validators.required],
      'type': ['reward', Validators.required],
      'rewards_attributes': this.fb.array(reward_attributes_array)
    });
  }

  initFaqForm(project = new Project) {
    let faqs = project.faqs;
    if (!faqs.length) {
      faqs = [new Faq];
    }

    const faq_attributes_array = [];
    faqs.forEach((faq: any) => {
      faq_attributes_array.push(
        this.fb.group({
          'id': faq.id,
          'question': faq.question,
          'answer': faq.answer
        })
      );
    });

    return this.fb.group({
      'id': [project.id, Validators.required],
      'type': ['faq', Validators.required],
      'faqs_attributes': this.fb.array(faq_attributes_array)
    });
  }

  initLinkForm(project = new Project) {
    let links = project.links;
    if (!links.length) {
      links = [new Link];
    }

    const link_attributes_array = [];
    links.forEach((link: any) => {
      link_attributes_array.push(
        this.fb.group({
          'id': link.id,
          'url': link.url
        })
      );
    });

    return this.fb.group({
      'id': [project.id, Validators.required],
      'type': ['link', Validators.required],
      'links_attributes': this.fb.array(link_attributes_array)
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
