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
    private authService: AuthService
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

  removeFromDraftProject(params) {
    return this.http.post(
      '/api/v1/projects',
      params
    ).map((res) => {
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

  getVideoId(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
  }

}
