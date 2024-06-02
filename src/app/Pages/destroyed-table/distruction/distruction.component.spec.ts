import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistructionComponent } from './distruction.component';

describe('DistructionComponent', () => {
  let component: DistructionComponent;
  let fixture: ComponentFixture<DistructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistructionComponent]
    });
    fixture = TestBed.createComponent(DistructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
