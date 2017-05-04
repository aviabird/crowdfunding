import { Section } from './section';

export class Story {
  id: number;
  body: string;
  // sections: Section[];
  project_id: number;

  constructor() {
    this.id = null;
    this.body = '';
    // this.sections = [new Section];
    this.project_id = null;
  }
}
