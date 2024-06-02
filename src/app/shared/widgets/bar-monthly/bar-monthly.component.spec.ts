import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarMonthlyComponent } from './bar-monthly.component';

describe('BarMonthlyComponent', () => {
  let component: BarMonthlyComponent;
  let fixture: ComponentFixture<BarMonthlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarMonthlyComponent]
    });
    fixture = TestBed.createComponent(BarMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
