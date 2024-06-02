import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAComponent } from './table-a.component';

describe('TableAComponent', () => {
  let component: TableAComponent;
  let fixture: ComponentFixture<TableAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableAComponent]
    });
    fixture = TestBed.createComponent(TableAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
