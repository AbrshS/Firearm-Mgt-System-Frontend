import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessControlListComponent } from './access-control-list.component';

describe('AccessControlListComponent', () => {
  let component: AccessControlListComponent;
  let fixture: ComponentFixture<AccessControlListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessControlListComponent]
    });
    fixture = TestBed.createComponent(AccessControlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
