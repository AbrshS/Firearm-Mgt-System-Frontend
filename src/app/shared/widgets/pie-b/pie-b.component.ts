import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import * as Highcharts from 'highcharts';  
import { FirearmService } from 'src/app/Core/services/firearm.service';

@Component({
  selector: 'app-widget-pie-b',
  templateUrl: './pie-b.component.html',
  styleUrls: ['./pie-b.component.css']
})
export class PieBComponent implements OnInit {

    constructor(private firearmService: FirearmService) { }

    ngOnInit(): void {
      this.loadDataAndCreateChart();
    }  

    loadDataAndCreateChart(): void {
        this.firearmService.getFirearcmHolder().subscribe(data => {
          const source = data.map(item => item.holder);
          const firearmHolderCounts = data.map(item => item.count);  

          this.createPieChart(source, firearmHolderCounts);
        });
      }  

    createPieChart(labels: string[], data: number[]): void {
    // Clear the canvas before creating the chart
    const ctx = document.getElementById('pieChart3') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            'rgba(70, 190, 190, 0.4)',   // More Vibrant Teal
            'rgba(140, 90, 255, 0.4)',   // More Vibrant Purple
            'rgba(255, 200, 60, 0.4)',   // More Vibrant Yellow
            'rgba(255, 150, 40, 0.4)',   // More Vibrant Orange
            'rgba(190, 200, 200, 0.4)'   // More Vibrant Grey
               // Light Grey
          ],     
          borderColor: [
            'rgba(75, 192, 192, 0.8)',   // Darker Teal
            'rgba(153, 102, 255, 0.8)',  // Darker Purple
            'rgba(255, 206, 86, 0.8)',   // Darker Yellow
            'rgba(255, 159, 64, 0.8)',   // Darker Orange
            'rgba(201, 203, 207, 0.8)'   // Darker Grey
            
          ],
          borderWidth: 1
        }]  
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Firearm Holders'
          }
        }
      }
    });
  }
}

