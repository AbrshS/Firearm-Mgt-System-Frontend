import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { FirearmService } from 'src/app/Core/services/firearm.service';

@Component({
  selector: 'app-widget-bar-monthly',
  templateUrl: './bar-monthly.component.html',
  styleUrls: ['./bar-monthly.component.css']
})
export class BarMonthlyComponent implements OnInit { 

  monthlyLossData: any; 
  monthlyDestroyedData: any; 
  monthlyReturnedData: any; 
  monthlyRecoveredData: any; 
  monthlyWithdrawData: any;  

  @ViewChild('monthlyBarChartCanvas') monthlyBarChartCanvas!: ElementRef<HTMLCanvasElement>;
  barChart: Chart | undefined;

  constructor(private firearmService: FirearmService) { }

  ngOnInit(): void {
    this.loadMonthlyLossData(); 
    this.loadMonthlyDestroyedData(); 
    this.loadMonthlyReturnedData(); 
    this.loadMonthlyRecoveredData(); 
    this.loadMonthlyWithdrawData();
  }

  loadMonthlyLossData(): void {
    this.firearmService.getallMonthlyLossFirearm().subscribe(data => {
      // Assuming data contains the loss count for the day
      this.monthlyLossData = data; // Adjust this according to your API response
      this.createBarChart();
    });
  } 
  
  loadMonthlyDestroyedData(): void {
    this.firearmService.getallMonthlyDestroyedFirearm().subscribe(data => {
      console.log('monthly Destroyed Data:', data);
      this.monthlyDestroyedData = data; // Assuming data contains the destroyed count for the day
      this.createBarChart();
    });
  }    

  loadMonthlyReturnedData(): void {
    this.firearmService.getallMonthlyReturnedFirearm().subscribe(data => {
      console.log(data); 
      this.monthlyReturnedData = data; 
      this.createBarChart();
    })
  } 

  loadMonthlyRecoveredData(): void {
    this.firearmService.getallMonthylRecoveredFirearm().subscribe(data => {
      console.log(data); 
      this.monthlyRecoveredData = data; 
      this.createBarChart();
    })
  } 

  loadMonthlyWithdrawData(): void {
    this.firearmService.getallMonthlyWithdrawFirearm().subscribe((data: any) => {
      console.log(data); 
      this.monthlyWithdrawData = data; 
      this.createBarChart();
    })
  }

  createBarChart(): void {
    if (!this.monthlyBarChartCanvas || !this.monthlyBarChartCanvas.nativeElement) {
      console.error('Canvas element not found.');
      return;
    }

    const ctx = this.monthlyBarChartCanvas.nativeElement.getContext('2d');
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
          data: [this.monthlyLossData, this.monthlyDestroyedData, this.monthlyReturnedData,this.monthlyWithdrawData,this.monthlyReturnedData],
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
            text: 'Firearm Monthly Activities'
          }
        }
      }
    });
  } 
}