import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerPendingComponent } from './officer-pending.component';

describe('OfficerPendingComponent', () => {
  let component: OfficerPendingComponent;
  let fixture: ComponentFixture<OfficerPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficerPendingComponent]
    });
    fixture = TestBed.createComponent(OfficerPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
