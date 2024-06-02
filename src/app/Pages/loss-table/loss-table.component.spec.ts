import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LossTableComponent } from './loss-table.component';

describe('LossTableComponent', () => {
  let component: LossTableComponent;
  let fixture: ComponentFixture<LossTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LossTableComponent]
    });
    fixture = TestBed.createComponent(LossTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
