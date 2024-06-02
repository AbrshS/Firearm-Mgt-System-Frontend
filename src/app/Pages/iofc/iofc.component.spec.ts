import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IofcComponent } from './iofc.component';

describe('IofcComponent', () => {
  let component: IofcComponent;
  let fixture: ComponentFixture<IofcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IofcComponent]
    });
    fixture = TestBed.createComponent(IofcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
