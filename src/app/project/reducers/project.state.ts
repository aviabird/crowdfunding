import { ProjectState } from './project.state';
import { Project } from './../../core/models/project';

export interface ProjectState {
  ids: number[];
  entities: { [id: number]: Project };
  draftProject: Project;
  selectedProject: Project;
}

export const initialState: ProjectState =  {
  ids: [],
  entities: {},
  draftProject: null,
  selectedProject: null
};
