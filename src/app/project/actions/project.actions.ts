import { Project } from './../../core/models/project';

export class ProjectActions {
  static INIT_DRAFT_PROJECT = 'INIT_DRAFT_PROJECT';
  static INIT_DRAFT_SUCCESS = 'INIT_DRAFT_SUCCESS';
  static SAVE_DRAFT = 'SAVE_DRAFT';
  static SELECT_PROJECT = 'SELECT_PROJECT';
  static FETCH_PROJECT = 'FETCH_PROJECT';
  static FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS';
  static FETCH__ALL_PROJECTS = 'FETCH_ALL_PROJECTS';
  static FETCH_CATEGORY_PROJECTS = 'FETCH_CATEGORY_PROJECTS';
  static FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';

  initDraftProject() {
    return { type: ProjectActions.INIT_DRAFT_PROJECT };
  }

  initDraftSuccess(project: Project) {
    return {
      type: ProjectActions.INIT_DRAFT_SUCCESS,
      payload: project
    };
  }

  fetchProject(id: number) {
    return {
      type: ProjectActions.FETCH_PROJECT,
      payload: id
    };
  }

  fetchProjectSuccess(project: Project) {
    return {
      type: ProjectActions.FETCH_PROJECT_SUCCESS,
      payload: project
    };
  }

  saveDraft(project: Project) {
    return {
       type: ProjectActions.SAVE_DRAFT,
       payload: project
    };
  }

  selectProject(project: Project) {
    return {
      type: ProjectActions.SELECT_PROJECT,
      payload: project
    };
  }

  fetchAllProjects() {
    return {
      type: ProjectActions.FETCH__ALL_PROJECTS
    };
  }

  fetchCategoryProjects(category: string) {
    return {
      type: ProjectActions.FETCH_CATEGORY_PROJECTS,
      payload: category
    };
  }

  fetchProjectsSuccess(projects: Project[]) {
    return {
      type: ProjectActions.FETCH_PROJECTS_SUCCESS,
      payload: projects
    };
  }

}
