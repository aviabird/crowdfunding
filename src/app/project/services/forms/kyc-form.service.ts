import { FormBuilder, Validators } from '@angular/forms';
import { Kyc } from './../../../core/models/kyc';
import { User } from './../../../core/models/user';
import { Injectable } from '@angular/core';

@Injectable()
export class KycFormService {

  constructor(private fb: FormBuilder) { }
    initKycForm(kyc: Kyc) {
      if (!kyc) {
      kyc = new Kyc;
    }

    return this.fb.group({
      'id': [kyc.id],
      'document_image_url': [kyc.document_image_url, Validators.required],
      'document_image_data': [],
      'document_id': [kyc.document_id, Validators.required],
      'document_type': [kyc.document_type || 'PASSPORT', Validators.required],
      'name': [kyc.name, Validators.required],
      'nationality': [kyc.nationality || 'Australia', Validators.required],
      'birth_date': [''],
    });
  }

}
