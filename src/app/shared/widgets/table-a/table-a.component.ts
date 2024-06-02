import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-widget-table-a',
  templateUrl: './table-a.component.html',
  styleUrls: ['./table-a.component.css']
})
export class TableAComponent implements OnInit {
    
  userIPAddress!: string;
  browserInfo!: string;

  constructor(private userInfoService: UserInfoService){}

  ngOnInit(): void {
    this.userInfoService.getUserIPAddress().subscribe((response: any) => {
      this.userIPAddress = response.ip;
    });

    this.browserInfo = this.userInfoService.getBrowserInfo();
    throw new Error('Method not implemented.');
  }
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: '2023:06:16', name: '00:09:17', weight:'User: Mr.x, IP: ', symbol: 'Active'},
  {position: '2023:06:16', name: '00:09:17', weight:'User: Mr.x, IP: ', symbol: 'Active'},
  {position: '2023:06:16', name: '00:09:17', weight:'User: Mr.x, IP: ', symbol: 'Active'},
  {position: '2023:06:16', name: '00:09:17', weight:'User: Mr.x, IP: ', symbol: 'Active'},
  
];


