import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBackersComponent } from './project-backers.component';

describe('ProjectBackersComponent', () => {
  let component: ProjectBackersComponent;
  let fixture: ComponentFixture<ProjectBackersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBackersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
