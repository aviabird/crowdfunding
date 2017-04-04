import { Project } from './../../core/models/project';
export class ProjectActions {
  static INIT_DRAFT_PROJECT = 'INIT_DRAFT_PROJECT';
  static INIT_DRAFT_SUCCESS = 'INIT_DRAFT_SUCCESS';

  initDraftProject() {
    return { type: ProjectActions.INIT_DRAFT_PROJECT };
  }

  initDraftSuccess(project: Project) {
    return {
      type: ProjectActions.INIT_DRAFT_SUCCESS,
      payload: project
    };
  }
}
