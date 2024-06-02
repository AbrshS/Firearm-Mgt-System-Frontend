import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoagComponent } from './poag.component';

describe('PoagComponent', () => {
  let component: PoagComponent;
  let fixture: ComponentFixture<PoagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoagComponent]
    });
    fixture = TestBed.createComponent(PoagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
