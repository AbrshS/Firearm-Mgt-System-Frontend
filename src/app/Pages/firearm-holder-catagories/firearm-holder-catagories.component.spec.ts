import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirearmHolderCatagoriesComponent } from './firearm-holder-catagories.component';

describe('FirearmHolderCatagoriesComponent', () => {
  let component: FirearmHolderCatagoriesComponent;
  let fixture: ComponentFixture<FirearmHolderCatagoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirearmHolderCatagoriesComponent]
    });
    fixture = TestBed.createComponent(FirearmHolderCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
