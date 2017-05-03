import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofortComponent } from './sofort.component';

describe('SofortComponent', () => {
  let component: SofortComponent;
  let fixture: ComponentFixture<SofortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
