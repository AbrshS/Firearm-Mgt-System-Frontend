import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';
import HC_3d from 'highcharts/highcharts-3d';

HC_exporting(Highcharts);
HC_exportData(Highcharts);
HC_3d(Highcharts);


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {
  
  Highcharts = Highcharts;
  chartOptions = {};

  constructor() {
    // Initialize the 3D module
  }

 
  ngOnInit() {
    // Define custom colors
   
  }
}
