import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SepaComponent } from './sepa.component';

describe('SepaComponent', () => {
  let component: SepaComponent;
  let fixture: ComponentFixture<SepaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SepaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
