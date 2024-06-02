import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// Update the path 
import { Router } from '@angular/router';
import { FirearmService } from 'src/app/Core/services/firearm.service';

@Component({
  selector: 'app-profile-sidenav',
  templateUrl: './profile-sidenav.component.html',
  styleUrls: ['./profile-sidenav.component.css']
})
export class ProfileSidenavComponent {
  constructor(private router: Router,
    private firearmService: FirearmService
  ) {}
  
  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  } 

  logout(){
    this.firearmService.signOut();  
        } 
  
}
