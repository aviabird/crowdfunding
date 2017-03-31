import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFaqComponent } from './project-faq.component';

describe('ProjectFaqComponent', () => {
  let component: ProjectFaqComponent;
  let fixture: ComponentFixture<ProjectFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
