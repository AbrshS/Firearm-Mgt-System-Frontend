import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyedTableComponent } from './destroyed-table.component';

describe('DestroyedTableComponent', () => {
  let component: DestroyedTableComponent;
  let fixture: ComponentFixture<DestroyedTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestroyedTableComponent]
    });
    fixture = TestBed.createComponent(DestroyedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
