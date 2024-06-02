import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUserAccountsComponent } from './system-user-accounts.component';

describe('SystemUserAccountsComponent', () => {
  let component: SystemUserAccountsComponent;
  let fixture: ComponentFixture<SystemUserAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemUserAccountsComponent]
    });
    fixture = TestBed.createComponent(SystemUserAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
