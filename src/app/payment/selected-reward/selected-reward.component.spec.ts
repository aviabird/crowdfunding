import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedRewardComponent } from './selected-reward.component';

describe('SelectedRewardComponent', () => {
  let component: SelectedRewardComponent;
  let fixture: ComponentFixture<SelectedRewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedRewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
