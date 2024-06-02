import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmtsComponent } from './hmts.component';

describe('HmtsComponent', () => {
  let component: HmtsComponent;
  let fixture: ComponentFixture<HmtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmtsComponent]
    });
    fixture = TestBed.createComponent(HmtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
