import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastyService } from 'ng2-toasty';
import { Response } from '@angular/http';
import { HttpService } from './http';
import { Injectable } from '@angular/core';

@Injectable()

export class StripeService {

  constructor(
    private http: HttpService,
    private toastyService: ToastyService,
    private authService: AuthService,
    private router: Router
  ) {}

  createCharge(token: string, projectId: number, amount: number) {
    console.log('in stripe service create charge');
    return this.http.post(
      '/api/v1/projects/fund_project', { stripeToken: token, id: projectId, amount: amount }
    ).subscribe((res: Response) => {
      console.log('stripe response', res.json());
    });
  }

  payBySofortPayments(token: string, projectId: number, amount: number) {
    console.log('in stripe service create charge');
    return this.http.post(
      '/api/v1/pay_by_sofort', { stripeToken: token, id: projectId, amount: amount }
    ).subscribe((res: Response) => {
      const data = res.json();
      if (data.error) {
        const message = data.error.card_error[0];
        this.toastyService.error(message);
        this.router.navigate(['/projects', projectId]);
      } else {
        const message = data.message;
        this.toastyService.success(message);
        this.router.navigate(['/projects', projectId]);
      }
    }, (err) => {
      if (err.status === 401) {
        this.authService.modalShow$.next(true);
        this.toastyService.error('Please Login!');
      } else if (err.status === 500) {
        this.toastyService.error('Internal Server Error, Please Try again');
      }
    });
  }

  fundProject(token: string, projectId: number, amount: number) {
    return this.http.post(
      '/api/v1/projects/fund_project', { stripeToken: token, id: projectId, amount: amount }
    ).subscribe((res: Response) => {
      const data = res.json();
      if (data.error) {
        const message = data.error.card_error[0];
        this.toastyService.error(message);
      } else {
        const message = data.message;
        this.toastyService.success(message);
        this.router.navigate(['/projects', projectId]);
      }
    }, (err) => {
      if (err.status === 401) {
        this.authService.modalShow$.next(true);
        this.toastyService.error('Please Login!');
      } else if (err.status === 500) {
        this.toastyService.error('Internal Server Error, Please Try again');
      }
    });
  }

}
