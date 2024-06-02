import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IofcModalComponent } from './iofc-modal.component';

describe('IofcModalComponent', () => {
  let component: IofcModalComponent;
  let fixture: ComponentFixture<IofcModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IofcModalComponent]
    });
    fixture = TestBed.createComponent(IofcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
