import { ToastyConfig, ToastyService } from 'ng2-toasty';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message = '';

  constructor(private route: ActivatedRoute,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.theme = 'bootstrap';
    this.route.queryParams.subscribe((params) => this.message = params['message']);
  }

  ngOnInit() {
    if (this.message) {
      this.toastyService.success(this.message);
    }
  }

}
