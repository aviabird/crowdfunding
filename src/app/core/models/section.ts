export class Section {
  id: number;
  heading: string;
  image_url: string;
  description: string;
  story_id: number;

  constructor() {
    this.id = null;
    this.heading = '';
    this.image_url = '';
    this.description = '';
    this.story_id = null;
  }
}
