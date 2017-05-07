import { ProjectHttpService } from './../../project/services/http/project-http.service';
import { Directive, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appStripeForm]'
})
export class StripeFormDirective {

  @Input() amount: number;
  @Input() projectId: number;

  constructor(
    private projectHttpService: ProjectHttpService
  ) { }

  @HostListener('click', ['$event'])
  openCheckout(event: Event) {
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_M2e5YbVJN53ZL7CWp1KdgNAC',
      locale: 'auto',
      token: (token: any) => {
        // this.projectHttpService.fundProject(token.id, this.projectId, this.amount);
      }
    });

    handler.open({
      name: 'CrowdPouch',
      description: 'Back this project',
      amount: this.amount * 100
    });

  }

}
