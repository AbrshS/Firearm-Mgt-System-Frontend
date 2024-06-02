import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPendingComponent } from './recover-pending.component';

describe('RecoverPendingComponent', () => {
  let component: RecoverPendingComponent;
  let fixture: ComponentFixture<RecoverPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoverPendingComponent]
    });
    fixture = TestBed.createComponent(RecoverPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
