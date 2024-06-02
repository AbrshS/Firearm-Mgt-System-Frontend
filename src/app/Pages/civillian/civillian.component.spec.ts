import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivillianComponent } from './civillian.component';

describe('CivillianComponent', () => {
  let component: CivillianComponent;
  let fixture: ComponentFixture<CivillianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CivillianComponent]
    });
    fixture = TestBed.createComponent(CivillianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
