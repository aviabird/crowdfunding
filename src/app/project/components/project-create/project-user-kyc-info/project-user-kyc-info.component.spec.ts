import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUserKycInfoComponent } from './project-user-kyc-info.component';

describe('ProjectUserKycInfoComponent', () => {
  let component: ProjectUserKycInfoComponent;
  let fixture: ComponentFixture<ProjectUserKycInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectUserKycInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUserKycInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
