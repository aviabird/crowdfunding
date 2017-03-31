import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEventComponent } from './project-event.component';

describe('ProjectEventComponent', () => {
  let component: ProjectEventComponent;
  let fixture: ComponentFixture<ProjectEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
