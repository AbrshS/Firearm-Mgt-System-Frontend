import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoagModalComponent } from './poag-modal.component';

describe('PoagModalComponent', () => {
  let component: PoagModalComponent;
  let fixture: ComponentFixture<PoagModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoagModalComponent]
    });
    fixture = TestBed.createComponent(PoagModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
