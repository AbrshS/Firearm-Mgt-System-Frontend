import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistructionPendingComponent } from './distruction-pending.component';

describe('DistructionPendingComponent', () => {
  let component: DistructionPendingComponent;
  let fixture: ComponentFixture<DistructionPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistructionPendingComponent]
    });
    fixture = TestBed.createComponent(DistructionPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
