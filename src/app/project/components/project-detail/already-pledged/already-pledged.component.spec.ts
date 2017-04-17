import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyPledgedComponent } from './already-pledged.component';

describe('AlreadyPledgedComponent', () => {
  let component: AlreadyPledgedComponent;
  let fixture: ComponentFixture<AlreadyPledgedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyPledgedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyPledgedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
