import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LossPendingComponent } from './loss-pending.component';

describe('LossPendingComponent', () => {
  let component: LossPendingComponent;
  let fixture: ComponentFixture<LossPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LossPendingComponent]
    });
    fixture = TestBed.createComponent(LossPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
