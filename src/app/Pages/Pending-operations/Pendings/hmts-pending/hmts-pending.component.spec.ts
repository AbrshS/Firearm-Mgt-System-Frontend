import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmtsPendingComponent } from './hmts-pending.component';

describe('HmtsPendingComponent', () => {
  let component: HmtsPendingComponent;
  let fixture: ComponentFixture<HmtsPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmtsPendingComponent]
    });
    fixture = TestBed.createComponent(HmtsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
