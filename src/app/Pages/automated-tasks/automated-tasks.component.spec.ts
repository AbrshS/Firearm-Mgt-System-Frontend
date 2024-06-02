import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedTasksComponent } from './automated-tasks.component';

describe('AutomatedTasksComponent', () => {
  let component: AutomatedTasksComponent;
  let fixture: ComponentFixture<AutomatedTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomatedTasksComponent]
    });
    fixture = TestBed.createComponent(AutomatedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
