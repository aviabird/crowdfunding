import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStoryComponent } from './project-story.component';

describe('ProjectStoryComponent', () => {
  let component: ProjectStoryComponent;
  let fixture: ComponentFixture<ProjectStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
