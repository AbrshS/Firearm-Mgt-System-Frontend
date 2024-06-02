import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostDestroyedComponent } from './lost-destroyed.component';

describe('LostDestroyedComponent', () => {
  let component: LostDestroyedComponent;
  let fixture: ComponentFixture<LostDestroyedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LostDestroyedComponent]
    });
    fixture = TestBed.createComponent(LostDestroyedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
