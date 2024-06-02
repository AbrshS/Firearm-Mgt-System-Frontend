import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarYearlyComponent } from './bar-yearly.component';

describe('BarYearlyComponent', () => {
  let component: BarYearlyComponent;
  let fixture: ComponentFixture<BarYearlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarYearlyComponent]
    });
    fixture = TestBed.createComponent(BarYearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
