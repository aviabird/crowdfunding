import { Link } from './../../../../core/models/link';
import { Reward } from './../../../../core/models/reward';
import { Kyc } from './../../../../core/models/kyc';
import { ImageUploadComponent } from './../../../../shared/components/image-upload/image-upload.component';
import { KycFormService } from './../../../services/forms/kyc-form.service';
import { User } from './../../../../core/models/user';
import { Project } from './../../../../core/models/project';
import { ProjectHttpService } from './../../../services/http/project-http.service';
import { getDraftProject } from './../../../reducers/project.selector';
import { AppState } from './../../../../app.state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-user-kyc-info',
  templateUrl: './project-user-kyc-info.component.html',
  styleUrls: ['./project-user-kyc-info.component.scss']
})
export class ProjectUserKycInfoComponent implements OnInit, OnDestroy {

  kycForm: FormGroup;
  @ViewChild('imageUpload') imageUpload: ImageUploadComponent;
  selectedDate = new Date();

  constructor(
    private store: Store<AppState>,
    private projectHttpService: ProjectHttpService,
    private kycFormService: KycFormService
  ) { }

  ngOnInit() {
    const kyc = new Kyc;

    this.kycForm = this.kycFormService.initKycForm(kyc);
    this.projectHttpService.getUserKycInfo()
      .subscribe((res: Kyc) => {
        this.kycForm = this.kycFormService.initKycForm(res);
        this.selectedDate = new Date(res.birth_date);
      });
  }

  uploadImage() {
    this.imageUpload.showImageBrowseDlg();
  }

  setImageData(image) {
    this.kycForm.get('document_image_data').setValue(image);
  }

  submitKyc() {
    this.kycForm.get('birth_date').setValue(this.selectedDate);
    const data = this.kycForm.value;
    this.projectHttpService.updateUserKycInfo(data).subscribe();
  }

  ngOnDestroy() {
  }

}
