import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulebookComponent } from './rulebook.component';

describe('RulebookComponent', () => {
  let component: RulebookComponent;
  let fixture: ComponentFixture<RulebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
