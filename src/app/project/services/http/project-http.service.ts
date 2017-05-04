import { ToastyService } from 'ng2-toasty';
import { AuthService } from './../../../core/services/auth.service';
import { Response } from '@angular/http';
import { Project } from './../../../core/models/project';
import { HttpService } from './../../../core/services/http';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectHttpService {

  public savingDraft = new Subject();

  constructor(
    private http: HttpService,
    private authService: AuthService,
    private toastyService: ToastyService
  ) { }

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

}
