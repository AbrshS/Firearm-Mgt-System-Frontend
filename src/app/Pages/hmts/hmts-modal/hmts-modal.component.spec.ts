import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmtsModalComponent } from './hmts-modal.component';

describe('HmtsModalComponent', () => {
  let component: HmtsModalComponent;
  let fixture: ComponentFixture<HmtsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmtsModalComponent]
    });
    fixture = TestBed.createComponent(HmtsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
