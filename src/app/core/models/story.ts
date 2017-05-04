import { Section } from './section';

export class Story {
  id: number;
  sections: Section[];
  project_id: number;

  constructor() {
    this.id = null;
    this.sections = [new Section];
    this.project_id = null;
  }
}
