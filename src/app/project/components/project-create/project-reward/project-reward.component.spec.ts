import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRewardComponent } from './project-reward.component';

describe('ProjectRewardComponent', () => {
  let component: ProjectRewardComponent;
  let fixture: ComponentFixture<ProjectRewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
