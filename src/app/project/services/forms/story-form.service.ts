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


    const section_attributes_array = [];
    story.sections.forEach(section => {
      section_attributes_array.push(
        this.fb.group({
          'id': section.id,
          'heading': [section.heading, Validators.required],
          'description': [section.description, Validators.required],
          'image_data': [''],
          'image_url': [section.image_url]
        })
      );
    });

    return this.fb.group({
      'id': [project.id],
      'type': ['story'],
      'story_attributes': this.fb.group({
        'id': [story.id],
        'sections_attributes': this.fb.array(section_attributes_array)
      })
    });
  }

}
