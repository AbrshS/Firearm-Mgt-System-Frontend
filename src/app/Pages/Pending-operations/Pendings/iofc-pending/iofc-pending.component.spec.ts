import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IofcPendingComponent } from './iofc-pending.component';

describe('IofcPendingComponent', () => {
  let component: IofcPendingComponent;
  let fixture: ComponentFixture<IofcPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IofcPendingComponent]
    });
    fixture = TestBed.createComponent(IofcPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
