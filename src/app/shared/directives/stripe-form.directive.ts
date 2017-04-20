import { ProjectService } from './../../project/services/project.service';
import { Directive, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appStripeForm]'
})
export class StripeFormDirective {

  @Input() amount: number;
  @Input() projectId: number;

  constructor(private projectService: ProjectService) { }

  @HostListener('click', ['$event'])
  openCheckout(event: Event) {
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_M2e5YbVJN53ZL7CWp1KdgNAC',
      locale: 'auto',
      token: (token: any) => {
        this.projectService.fundProject(token.id, this.projectId, this.amount);
      }
    });

    handler.open({
      name: 'CrowdPouch',
      description: 'Back this project',
      amount: this.amount * 100
    });

  }

}
