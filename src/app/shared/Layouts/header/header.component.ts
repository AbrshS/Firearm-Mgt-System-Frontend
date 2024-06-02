import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FirearmService } from 'src/app/Core/services/firearm.service';
import { UserStoreService } from 'src/app/Core/services/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showModal = false;
  public accountType!:string;
  constructor(private router: Router,
  private userStore: UserStoreService,
  private firearmService: FirearmService ) {}

  ngOnInit(): void { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
      // You can perform actions based on navigation events here 
      
      }
    }); 

    this.userStore.getRoleFromStore()
    .subscribe(val=>{
      const roleFromToken = this.firearmService.getaccountTypeFromToken();
      this.accountType = val || roleFromToken
    })
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}