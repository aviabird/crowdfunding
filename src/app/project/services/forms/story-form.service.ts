import { Validators, FormBuilder } from '@angular/forms';
import { Story } from './../../../core/models/story';
import { Injectable } from '@angular/core';

@Injectable()
export class StoryFormService {

  constructor(
    private fb: FormBuilder
  ) { }

  initStoryForm(project) {
    let story = project.story;
    if (!story) {
      story = new Story;
    }

    return this.fb.group({
      'id': [project.id],
      'type': ['story'],
      'story_attributes': this.fb.group({
        'id': [story.id],
        'body': [story.body, Validators.required]
      })
    });
  }

}
