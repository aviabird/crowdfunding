import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofortRedirectUrlComponent } from './sofort-redirect-url.component';

describe('SofortRedirectUrlComponent', () => {
  let component: SofortRedirectUrlComponent;
  let fixture: ComponentFixture<SofortRedirectUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofortRedirectUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofortRedirectUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
