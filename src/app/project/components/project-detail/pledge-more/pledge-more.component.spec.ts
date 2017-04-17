import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgeMoreComponent } from './pledge-more.component';

describe('PledgeMoreComponent', () => {
  let component: PledgeMoreComponent;
  let fixture: ComponentFixture<PledgeMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PledgeMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PledgeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
