import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarWeeklyComponent } from './bar-weekly.component';

describe('BarWeeklyComponent', () => {
  let component: BarWeeklyComponent;
  let fixture: ComponentFixture<BarWeeklyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarWeeklyComponent]
    });
    fixture = TestBed.createComponent(BarWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
