import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeOauthRedirectComponent } from './stripe-oauth-redirect.component';

describe('StripeOauthRedirectComponent', () => {
  let component: StripeOauthRedirectComponent;
  let fixture: ComponentFixture<StripeOauthRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeOauthRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeOauthRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
