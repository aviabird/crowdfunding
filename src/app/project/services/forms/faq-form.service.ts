import { Faq } from './../../../core/models/faq';
import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FaqFormService {

  constructor(
    private fb: FormBuilder
  ) { }

  initFaqForm(project) {
    let faqs = project.faqs;
    if (!faqs) {
      faqs = [new Faq];
    }

    const faq_attributes_array = [];
    faqs.forEach((faq: any) => {
      faq_attributes_array.push(
        this.fb.group({
          'id': [faq.id],
          'question': [faq.question, Validators.required],
          'answer': [faq.answer, Validators.required]
        })
      );
    });

    return this.fb.group({
      'id': [project.id],
      'type': ['faq'],
      'faqs_attributes': this.fb.array(faq_attributes_array)
    });
  }

}
