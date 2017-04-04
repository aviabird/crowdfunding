import { Map, Record } from 'immutable';
import { Project } from './../../core/models/project';

export interface ProjectState extends Map<string, any> {
  draftProject: Project;
}

export const ProjectStateRecored = Record({
  draftProject: null
});
