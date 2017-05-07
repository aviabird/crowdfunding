import { HttpService } from './../../core/services/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {

  constructor(
    private http: HttpService
  ) { }

  fetchSelectedReward(id: number) {
    return this.http.get(
      `/api/v1/rewards/${id}`
    ).map((res) => {
      return res.json();
    });
  }

}
