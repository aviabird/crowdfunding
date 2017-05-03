import { AuthService } from './../../core/services/auth.service';
import { ToastyService } from 'ng2-toasty';
import { Response } from '@angular/http';
import { AppConstants } from './../../app.constants';
import { Subject } from 'rxjs/Subject';
import { Link } from './../../core/models/link';
import { Faq } from './../../core/models/faq';
import { Reward } from './../../core/models/reward';
import { Story } from './../../core/models/story';
import { Project } from './../../core/models/project';
import { HttpService } from './../../core/services/http';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  public savingDraft = new Subject();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private http: HttpService,
    private toastyService: ToastyService
  ) { }

  initProjectForm(project) {
    return this.fb.group({
      'id': [project.id],
      'type': ['project'],
      'title': [project.title, Validators.required],
      'category_id': [project.category_id, Validators.required],
      'image_url': [project.image_url],
      'image_data': [''],
      'video_url': [project.video_url, this.validateURL],
      'pledged_amount': [project.pledged_amount, Validators.required],
      'funding_model': [project.funding_model || 'flexi', Validators.required],
      'start_date': [project.start_date],
      'duration': [project.duration, Validators.compose([Validators.required, this.validateNumber])]
    });
  }

  initStoryForm(project) {
    let story = project.story;
    if (!story) {
      story = new Story;
    }


    const section_attributes_array = [];
    story.sections.forEach(section => {
      section_attributes_array.push(
        this.fb.group({
          'id': section.id,
          'heading': [section.heading, Validators.required],
          'description': [section.description, Validators.required],
          'image_data': [''],
          'image_url': [section.image_url]
        })
      );
    });

    return this.fb.group({
      'id': [project.id],
      'type': ['story'],
      'story_attributes': this.fb.group({
        'id': [story.id],
        'sections_attributes': this.fb.array(section_attributes_array)
      })
    });
  }

  initRewardForm(project) {
    let rewards = project.rewards;
    if (rewards.length === 0) {
      rewards = [new Reward];
    }

    const reward_attributes_array = [];
    rewards.forEach((reward: any) => {
      reward_attributes_array.push(
        this.fb.group({
          'id': [reward.id],
          'title': [reward.title, Validators.required],
          'description': [reward.description, Validators.required],
          'image_url': [reward.image_url],
          'image_data': [''],
          'amount': [reward.amount, Validators.required],
          '_destroy': [false]
        })
      );
    });

    return this.fb.group({
      'id': [project.id, Validators.required],
      'type': ['reward', Validators.required],
      'rewards_attributes': this.fb.array(reward_attributes_array)
    });
  }

  initFaqForm(project) {
    let faqs = project.faqs;
    if (!faqs) {
      faqs = [new Faq];
    }

    const faq_attributes_array = [];
    faqs.forEach((faq: any) => {
      faq_attributes_array.push(
        this.fb.group({
          'id': [faq.id],
          'question': [faq.question, Validators.required],
          'answer': [faq.answer, Validators.required]
        })
      );
    });

    return this.fb.group({
      'id': [project.id],
      'type': ['faq'],
      'faqs_attributes': this.fb.array(faq_attributes_array)
    });
  }

  initLinkForm(project) {
    let links = project.links;
    if (!links) {
      links = [new Link];
    }

    const link_attributes_array = [];
    links.forEach((link: any) => {
      link_attributes_array.push(
        this.fb.group({
          'id': [link.id],
          'url': [link.url, Validators.required]
        })
      );
    });

    return this.fb.group({
      'id': [project.id],
      'type': ['link'],
      'links_attributes': this.fb.array(link_attributes_array)
    });
  }

  fetchAllCategories() {
    return this.http.get(
      '/api/v1/category'
    ).map(res => {
      return res.json();
    });
  }

  createProject(params) {
    this.savingDraft.next(true);
    return this.http.post(
      '/api/v1/projects',
      params
    ).map((res) => {
      this.savingDraft.next(false);
      return res.json();
    });
  }

  getProjects() {
    return this.http.get(
      `/api/v1/projects`
    ).map((res) => {
      return res.json();
    });
  }

  getProjectsByCategory(category: string) {
    return this.http.get(
      `/api/v1/projects/categories/${category}`
    ).map((res) => {
      return res.json();
    });
  }

  fetchProject(id) {
    return this.http.get(
      `/api/v1/projects/${id}`
    ).map((res) => {
      return res.json();
    });
  }

  updateProject(project: Project) {
    this.savingDraft.next(true);
    return this.http.put(
      `/api/v1/projects/${project.id}`, project
    ).map((res) => {
      this.savingDraft.next(false);
      return res.json();
    });
  }

  initDraftProject() {
    return this.http.get(
      `/api/v1/projects/draft`
    ).map((res) => {
      const project = res.json();
      return project;
    });
  }

  launchProject(id: string) {
    return this.http.post(
      `/api/v1/projects/launch`, { id: id }
    ).map((res) => {
      return res.json();
    });
  }

  fundProject(token: string, projectId: number, amount: number) {
    return this.http.post(
      '/api/v1/projects/fund_project', { stripeToken: token, id: projectId, amount: amount }
    ).subscribe((res: Response) => {
      const data = res.json();
      if (data.error) {
        const message = data.error.card_error[0];
        this.toastyService.error(message);
      } else {
        const message = data.message;
        this.toastyService.success(message);
      }
    }, (err) => {
      if (err.status === 401) {
        this.authService.modalShow$.next(true);
        this.toastyService.error('Please Login!');
      } else if (err.status === 500) {
        this.toastyService.error('Internal Server Error, Please Try again');
      }
    });
  }

  fetchProjectComments(project_id: number) {
    return this.http.get(
      `/api/v1/comments/${project_id}`
    ).map((res: Response) => {
      return res.json();
    });
  }

  addNewComment(comment) {
    return this.http.post(
      '/api/v1/comments', comment
    ).map((res: Response) => {
      return res.json();
    });
  }

  editComment(comment) {
    const id = comment.id;
    return this.http.put(
      `/api/v1/comments/${id}`, comment
    ).map((res: Response) => {
      return res.json();
    });
  }

  deleteComment(id: number) {
    return this.http.delete(
      `/api/v1/comments/${id}`, {}
    ).map((res: Response) => {
      console.log('response', res.json());
      return res.json().id;
    });
  }

  validateNumber(c: FormControl) {
    return c.value > 0 && c.value <= 60 ? null : { validateNumber: true };
  };

  validateURL(c: FormControl) {
    const URL_REGEXP = AppConstants.URL_REGEX;
    return URL_REGEXP.test(c.value) ? null : { validateURL: true };
  }

}
