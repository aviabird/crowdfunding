import { Section } from './section';
import { Base } from './base';

export class Story extends Base {
  id = '';
  sections: Section[] = [new Section];
  project_id: string;
}
