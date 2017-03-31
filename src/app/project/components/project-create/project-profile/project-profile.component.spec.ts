import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProfileComponent } from './project-profile.component';

describe('ProjectProfileComponent', () => {
  let component: ProjectProfileComponent;
  let fixture: ComponentFixture<ProjectProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
