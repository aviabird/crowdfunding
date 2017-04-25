import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCampaignsComponent } from './user-campaigns.component';

describe('UserCampaignsComponent', () => {
  let component: UserCampaignsComponent;
  let fixture: ComponentFixture<UserCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
