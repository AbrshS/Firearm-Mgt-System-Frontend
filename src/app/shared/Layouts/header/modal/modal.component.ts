import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirearmService } from '../../../../Core/services/firearm.service';
import { ProfileSidenavComponent } from '../profile-sidenav/profile-sidenav.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserStoreService } from 'src/app/Core/services/user-store.service';
import { NotificationComponent } from 'src/app/shared/widgets/notification/notification.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{ 

public fullName: string = ""; 

sidenav: any; 
currentDateTime: Date | undefined;
  accountType: any;

  constructor(private dialog: MatDialog, 
    private firearmService: FirearmService, 
    private userStore: UserStoreService
  ) {
    this.getCurrentDateTimeInEAT();
   }
   
  ngOnInit(){ 
  this.userStore.getFullNameFromStore()
  .subscribe(val=> {
    let fullNameFromToken = this.firearmService.getfullNameFromToken();
    this.fullName = val || fullNameFromToken
  }); 

  this.userStore.getRoleFromStore()
  .subscribe(val=>{
    const roleFromToken = this.firearmService.getaccountTypeFromToken();
    this.accountType = val || roleFromToken
  })
    throw new Error('Method not implemented.');
  } 


  openProfileDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.position = {
      right: '20px',
      top: '250px'
    };
    dialogConfig.panelClass = 'profile-dialog-container';

    this.dialog.open(ProfileSidenavComponent, dialogConfig);
  }    
  
  openNotification(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.position = {
      right: '20px',
      top: '250px'
    };
    dialogConfig.panelClass = 'profile-dialog-container';

    this.dialog.open(NotificationComponent, dialogConfig);
  }
     
  getCurrentDateTimeInEAT() {
    // Get the current date and time in UTC
    const currentUTC = new Date();
    // East African Time (EAT) offset is UTC+3
    const eastAfricanOffset = 3 * 60; // in minutes
    // Adjust the time to EAT
    const eatTime = new Date(currentUTC.getTime() + (eastAfricanOffset * 60000));

    this.currentDateTime = eatTime;
  }

  logout(){
   this.firearmService.signOut(); 
  } 
 
}      