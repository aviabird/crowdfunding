import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackedProjectsComponent } from './backed-projects.component';

describe('BackedProjectsComponent', () => {
  let component: BackedProjectsComponent;
  let fixture: ComponentFixture<BackedProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackedProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
