import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirearmRegistryComponent } from './firearm-registry.component';

describe('FirearmRegistryComponent', () => {
  let component: FirearmRegistryComponent;
  let fixture: ComponentFixture<FirearmRegistryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirearmRegistryComponent]
    });
    fixture = TestBed.createComponent(FirearmRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
