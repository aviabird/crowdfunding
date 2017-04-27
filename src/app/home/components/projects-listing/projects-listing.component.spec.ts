import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsListingComponent } from './projects-listing.component';

describe('ProjectsListingComponent', () => {
  let component: ProjectsListingComponent;
  let fixture: ComponentFixture<ProjectsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
