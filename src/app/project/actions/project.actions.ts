import { Project } from './../../core/models/project';
export class ProjectActions {
  static INIT_DRAFT_PROJECT = 'INIT_DRAFT_PROJECT';
  static INIT_DRAFT_SUCCESS = 'INIT_DRAFT_SUCCESS';
  static SAVE_DRAFT = 'SAVE_DRAFT';
  static SELECT_PROJECT = 'SELECT_PROJECT';

  initDraftProject() {
    return { type: ProjectActions.INIT_DRAFT_PROJECT };
  }

  initDraftSuccess(project: Project) {
    return {
      type: ProjectActions.INIT_DRAFT_SUCCESS,
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

}
