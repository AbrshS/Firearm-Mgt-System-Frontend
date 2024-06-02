import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivillianPendingComponent } from './civillian-pending.component';

describe('CivillianPendingComponent', () => {
  let component: CivillianPendingComponent;
  let fixture: ComponentFixture<CivillianPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CivillianPendingComponent]
    });
    fixture = TestBed.createComponent(CivillianPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
