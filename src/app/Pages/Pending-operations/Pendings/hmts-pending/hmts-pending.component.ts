import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HmtsPending } from 'src/app/Core/models/hmtsPending.model';
import { Officer } from 'src/app/Core/models/Officer.model';
import { FirearmService } from 'src/app/Core/services/firearm.service';

@Component({
  selector: 'app-hmts-pending',
  templateUrl: './hmts-pending.component.html',
  styleUrls: ['./hmts-pending.component.css']
})
export class HmtsPendingComponent {
  panelOpenState = false;   
  
  dataSource: MatTableDataSource<HmtsPending> = new MatTableDataSource<HmtsPending>();
  
    displayedColumns: string[] = [
      'REF#',
      'NAME',
      'FIREARM',
      'WHO REGISTERD THE FIREARM',
       'REGISTERED BODY',
      'ACTION'
    ]; 
  errorMessage: string | undefined;
    constructor(private cdr: ChangeDetectorRef, 
      private firearmService: FirearmService) {}
    // second.component.ts
    ngOnInit(): void {
             
       this.getOfficerPending();
      }  
        
      getOfficerPending(): void {
        this.firearmService.getAllHmtsPending().subscribe(
          (response: HmtsPending[]) => {
            if (response && response.length > 0 ) {
              this.dataSource.data = response; // Assign the data to the data source
              console.log("Connected Successfully", response);
              this.cdr.detectChanges();
            } else {
              console.error('API response is empty or undefined');
            }
          },
          (error) => {
            console.error('Error fetching data from API:', error);
            this.errorMessage = 'An error occurred while fetching data from the API.';
          }
        );
      }
}
