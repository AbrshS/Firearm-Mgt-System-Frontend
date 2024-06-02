import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
})
export class DataTableComponent implements OnInit {
  postedData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/register').subscribe(
      response => {
        this.postedData = response;
      },
      error => {
        console.error('Error fetching posted data:', error);
      }
    );
  }
}
