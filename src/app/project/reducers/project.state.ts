import { Map, Record, fromJS } from 'immutable';
import { Project } from './../../core/models/project';

export interface ProjectState extends Map<string, any> {
  draftProject: any;
}

export const ProjectStateRecored = Record({
  draftProject: fromJS({})
});
