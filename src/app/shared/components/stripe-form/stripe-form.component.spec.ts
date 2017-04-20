import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeFormComponent } from './stripe-form.component';

describe('StripeFormComponent', () => {
  let component: StripeFormComponent;
  let fixture: ComponentFixture<StripeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
