import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerModuleComponent } from './officer-module.component';

describe('OfficerModuleComponent', () => {
  let component: OfficerModuleComponent;
  let fixture: ComponentFixture<OfficerModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficerModuleComponent]
    });
    fixture = TestBed.createComponent(OfficerModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
