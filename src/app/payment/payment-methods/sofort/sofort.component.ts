import { ToastyService } from 'ng2-toasty';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sofort',
  templateUrl: './sofort.component.html',
  styleUrls: ['./sofort.component.scss']
})
export class SofortComponent implements OnInit {

  source: any;
  projectId: number;

  constructor(
    private route: ActivatedRoute,
    private toastyService: ToastyService,
  ) {
    this.route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }

  ngOnInit() {
    // this.source = this.createSourceObject();
  }

  private createSourceObject() {
    return Stripe.source.create({
      type: 'sofort',
      amount: 100,
      currency: 'eur',
      redirect: {
        return_url: `http://localhost:4200/projects/${this.projectId}/payment/sofort/redirect`,
      },
      sofort: {
        country: 'DE',
        statement_descriptor: `PROJECT ${this.projectId}`,
      },
    }, this.stripeResponseHandler.bind(this));
  }

  private stripeResponseHandler(status: any) {
    if (status === 200) {
      const response = JSON.parse(this.source.response);
      const redirect_url = response.redirect.url;
      window.location.href = redirect_url;
    } else {
      const response = JSON.parse(this.source.response);
      const error_message = response.error.message;
      this.toastyService.error(error_message);
    }
  }

}
