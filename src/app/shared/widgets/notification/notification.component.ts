import { Component, OnInit } from '@angular/core';
import { FirearmService } from 'src/app/Core/services/firearm.service';
import { Notification } from 'src/app/Core/models/Notification.model';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/Core/services/user-store.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];
  errorMessage: string | undefined;
  isModalVisible: boolean = true; 
  public accountType!:string;
  constructor(private firearmService: FirearmService, 
    private router: Router, 
  private userStore: UserStoreService) {}

  ngOnInit(): void {
    this.loadNotifications(); 

    this.userStore.getRoleFromStore()
    .subscribe(val=>{
      const roleFromToken = this.firearmService.getaccountTypeFromToken();
      this.accountType = val || roleFromToken
    })
  }

  loadNotifications(): void {
    this.firearmService.getNotifications().subscribe(
      (response: any) => {
        console.log('API response:', response);
        this.notifications = response.map((item: any) => ({
          id: item.id,
          store: item.store,
          holder: item.holder,
          isRead: item.isRead,
          sentDate: new Date(item.sentDate)
        }));
      },
      (error) => {
        console.error('Error fetching notifications from API:', error);
        this.errorMessage = 'An error occurred while fetching notifications from the API.';
      }
    );
  }

  onClick(): void {
   
  }

  deleteNotification(id: number): void {
    this.firearmService.deleteNotification(id).subscribe(
      () => {
        this.loadNotifications(); // Refresh notifications after deletion
      },
      (error) => {
        console.error('Error deleting notification:', error);
        this.errorMessage = 'An error occurred while deleting the notification.';
      }
    );
  }  

  closeModal(): void {
    this.isModalVisible = false; 
    this.router.navigate(['/Pending']);
    // window.location.reload();

     
  }

}
