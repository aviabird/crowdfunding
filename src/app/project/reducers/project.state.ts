import { Project } from './../../core/models/project';
import { Map, Record, List } from 'immutable';

export interface ProjectState extends Map<string, any> {
  projectIds: List<number>;
  projectEntities: Map<number, Project>;
  selectedProjectId: number;
}

export const ProjectStateRecord = Record({
  projectIds: List([]),
  projectEntities: Map({}),
  selectedProjectId: null,
});
