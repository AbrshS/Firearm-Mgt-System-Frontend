import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';  
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widgets-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})   

export class CardComponent {  



  @Input()label: string | undefined;
  @Input()total!: string;
  @Input() percentage!: string;
  @Input() data = [];
  
  Highcharts = Highcharts;
  chartOptions = {};
constructor() {
  
} 
ngOnInit() {
    this.chartOptions = {
      
    }
            HC_exporting(Highcharts);

            setTimeout(() => {
              window.dispatchEvent(
                new Event('resize')
              );
            }, 300);
        }}