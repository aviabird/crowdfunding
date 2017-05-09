import { AppConstants } from './../../../app.constants';
import { Picture } from './../../../core/models/picture';
import { Project } from './../../../core/models/project';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectFormService {

  constructor(
    private fb: FormBuilder
  ) {}

  initProjectForm(project: Project) {
    let pictures = project.pictures;
    if (!pictures) {
      pictures = [new Picture];
    }

    const picture_attributes_array = [];
    pictures.forEach((picture) => {
      picture_attributes_array.push(
        this.fb.group({
          'id': [picture.id],
          'url': [picture.url],
          '_destroy': [false]
        })
      );
    });

    return this.fb.group({
      'id': [project.id],
      'type': ['project'],
      'title': [project.title, Validators.required],
      'category_id': [project.category_id, Validators.required],
      'images_data': this.fb.array([]),
      'video_url': [project.video_url, this.validateURL],
      'pledged_amount': [project.pledged_amount, Validators.required],
      'funding_model': [project.funding_model || 'flexi', Validators.required],
      'start_date': [],
      'currency': [project.currency || 'USD', Validators.required],
      'duration': [project.duration, Validators.compose([Validators.required, this.validateNumber])],
      'pictures_attributes': this.fb.array(picture_attributes_array)
    });
  }

  private validateNumber(c: FormControl) {
    return c.value > 0 && c.value <= 60 ? null : { validateNumber: true };
  };

  private validateURL(c: FormControl) {
    const URL_REGEXP = AppConstants.URL_REGEX;
    return !(c.value) || URL_REGEXP.test(c.value) ? null : { validateURL: true };
  }

}
