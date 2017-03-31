import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTitleComponent } from './project-title.component';

describe('ProjectTitleComponent', () => {
  let component: ProjectTitleComponent;
  let fixture: ComponentFixture<ProjectTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
