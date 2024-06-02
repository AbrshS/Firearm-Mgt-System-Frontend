import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatComponent } from 'src/app/modules/chat/chat.component';
import { FirearmService } from 'src/app/Core/services/firearm.service';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalFirearms: number = 0;
  totalMarked: number = 0;
  totalDestroyed: number = 0;
  totalLost: number = 0;
  totalOfficer: number = 0;
  showchat = false;
  isSidenavOpen = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  Openchat(): void {
    this.showchat = true;
    this.dialog.open(ChatComponent);
  }
  constructor(
    private firearmServices: FirearmService,
    private dialog: MatDialog,
    private userInfoService: UserInfoService
  ) {}

  ngOnInit(): void {
    this.firearmServices.getTotalFirearms().subscribe(
      (count) => {
        this.totalFirearms = count;
     
        // Handle the count as needed, e.g., update your UI
      },
      (error) => {
        console.error('Error fetching total firearms:', error);
      }
    );

    this.firearmServices.getTotalMarked().subscribe(
      (count) => {
        this.totalMarked = count;
        // Handle the count as needed, e.g., update your UI
      },
      (error) => {
        console.error('Error fetching total firearms:', error);
      }
    );

    this.firearmServices.getTotalDestroyed().subscribe((count) => {
      this.totalDestroyed = count;
    });

    this.firearmServices.getTotalLost().subscribe(
      (count) => {
        this.totalLost = count;
      },
      (error) => {
        console.error('Error fetching total firearms:', error);
      }
    );

    this.firearmServices.getTotalOfficer().subscribe(
      (count) => {
        this.totalOfficer = count;
      },
      (error) => {
        console.error('Error fetching total firearms:', error);
      }
    );
  }

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'symbolL'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {
    position: '15-JUN-2023',
    name: '07:43',
    weight: 'some operations',
    symbol: 'something has changed',
  },
  {
    position: '15-JUN-2023',
    name: '07:43',
    weight: 'some operations',
    symbol: 'something has changed',
  },
  {
    position: '15-JUN-2023',
    name: '07:43',
    weight: 'some operations',
    symbol: 'something has changed',
  },
  {
    position: '15-JUN-2023',
    name: '07:43',
    weight: 'some operations',
    symbol: 'something has changed',
  },
  {
    position: '15-JUN-2023',
    name: '07:43',
    weight: 'some operations',
    symbol: 'something has changed',
  },
];
