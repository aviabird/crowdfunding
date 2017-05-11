import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import {Location } from '@angular/common';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss']
})
export class SocialShareComponent implements OnInit {

  pageFullUrl: string;

  constructor(private location: Location) {
    const pageUrl = location.prepareExternalUrl(location.path());
    this.pageFullUrl = `${environment.UI_ENDPOINT}` + pageUrl;
  }

  ngOnInit() {
  }

}
