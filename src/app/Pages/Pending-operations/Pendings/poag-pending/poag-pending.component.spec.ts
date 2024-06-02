import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoagPendingComponent } from './poag-pending.component';

describe('PoagPendingComponent', () => {
  let component: PoagPendingComponent;
  let fixture: ComponentFixture<PoagPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoagPendingComponent]
    });
    fixture = TestBed.createComponent(PoagPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
