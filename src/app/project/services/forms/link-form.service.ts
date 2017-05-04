import { Link } from './../../../core/models/link';
import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class LinkFormService {

  constructor(
    private fb: FormBuilder
  ) { }

  initLinkForm(project) {
    let links = project.links;
    if (links.length === 0) {
      links = [new Link];
    }

    const link_attributes_array = [];
    links.forEach((link: any) => {
      link_attributes_array.push(
        this.fb.group({
          'id': [link.id],
          'url': [link.url, Validators.required],
          '_destroy': [false]
        })
      );
    });

    return this.fb.group({
      'id': [project.id],
      'type': ['link'],
      'links_attributes': this.fb.array(link_attributes_array)
    });
  }

}
