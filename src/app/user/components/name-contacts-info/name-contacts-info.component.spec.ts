import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameContactsInfoComponent } from './name-contacts-info.component';

describe('NameContactsInfoComponent', () => {
  let component: NameContactsInfoComponent;
  let fixture: ComponentFixture<NameContactsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameContactsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameContactsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
