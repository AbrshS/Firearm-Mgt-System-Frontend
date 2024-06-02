import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVisualizationComponent } from './report-visualization.component';

describe('ReportVisualizationComponent', () => {
  let component: ReportVisualizationComponent;
  let fixture: ComponentFixture<ReportVisualizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportVisualizationComponent]
    });
    fixture = TestBed.createComponent(ReportVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
