import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLinkComponent } from './project-link.component';

describe('ProjectLinkComponent', () => {
  let component: ProjectLinkComponent;
  let fixture: ComponentFixture<ProjectLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
