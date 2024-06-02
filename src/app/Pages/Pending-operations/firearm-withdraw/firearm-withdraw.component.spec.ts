import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirearmWithdrawComponent } from './firearm-withdraw.component';

describe('FirearmWithdrawComponent', () => {
  let component: FirearmWithdrawComponent;
  let fixture: ComponentFixture<FirearmWithdrawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirearmWithdrawComponent]
    });
    fixture = TestBed.createComponent(FirearmWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
