import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { FirearmService } from 'src/app/Core/services/firearm.service';

@Component({
  selector: 'app-widget-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  lossData: any; 
  dailyDestroyedData: any; 
  dailyReturnedData: any; 
  dailyRecoveredData: any; 
  dailyWithdrawData: any;  

  @ViewChild('barChartCanvas') barChartCanvas!: ElementRef<HTMLCanvasElement>;
  barChart: Chart | undefined;

  constructor(private firearmService: FirearmService) { }

  ngOnInit(): void {
    this.loadLossData(); 
    this.loadDailyDestroyedData(); 
    this.loadDailyReturnedData(); 
    this.loadDailyRecoveredData(); 
    this.loadDailyWithdrawData();
  }

  loadLossData(): void {
    this.firearmService.getallDailyLossFirearm().subscribe(data => {
      // Assuming data contains the loss count for the day
      this.lossData = data; // Adjust this according to your API response
      this.createBarChart();
    });
  } 
  
  loadDailyDestroyedData(): void {
    this.firearmService.getallDailyDestroyedFirearm().subscribe(data => {
      console.log('Daily Destroyed Data:', data);
      this.dailyDestroyedData = data; // Assuming data contains the destroyed count for the day
      this.createBarChart();
    });
  }    

  loadDailyReturnedData(): void {
    this.firearmService.getallDailyReturnedFirearm().subscribe(data => {
      console.log(data); 
      this.dailyReturnedData = data; 
      this.createBarChart();
    })
  } 

  loadDailyRecoveredData(): void {
    this.firearmService.getallDailyRecoveredFirearm().subscribe(data => {
      console.log(data); 
      this.dailyRecoveredData = data; 
      this.createBarChart();
    })
  } 

  loadDailyWithdrawData(): void {
    this.firearmService.getallDailyWithdrawFirearm().subscribe((data: any) => {
      console.log(data); 
      this.dailyWithdrawData = data; 
      this.createBarChart();
    })
  }

  createBarChart(): void {
    if (!this.barChartCanvas || !this.barChartCanvas.nativeElement) {
      console.error('Canvas element not found.');
      return;
    }

    const ctx = this.barChartCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not found.');
      return;
    }

    if (this.barChart) {
      this.barChart.destroy(); // Destroy existing chart if it exists
    }

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Loss', 'Destruction', 'Return', 'withdraw', 'Recovery'],
        datasets: [{
          label: 'Count',
          data: [this.lossData, this.dailyDestroyedData, this.dailyReturnedData,this.dailyWithdrawData,this.dailyReturnedData],
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
        scales: {
          y: {
            beginAtZero: true
          } 
        } , 
        plugins: {
          title: {
            display: true,
            text: 'Firearm Daily Activities'
          }
        }
      }
    });
  } 
}
