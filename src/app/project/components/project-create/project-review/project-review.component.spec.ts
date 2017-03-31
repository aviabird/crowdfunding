import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectReviewComponent } from './project-review.component';

describe('ProjectReviewComponent', () => {
  let component: ProjectReviewComponent;
  let fixture: ComponentFixture<ProjectReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
