import { Response } from '@angular/http';
import { HttpService } from './http';
import { Injectable } from '@angular/core';

@Injectable()

export class StripeService {

  constructor(private http: HttpService) {}

  createCharge(token: string, projectId: number, amount: number) {
    console.log('in stripe service create charge');
    return this.http.post(
      '/api/v1/projects/fund_project', { stripeToken: token, id: projectId, amount: amount }
    ).subscribe((res: Response) => {
      console.log('stripe response', res.json());
    });
  }


}
