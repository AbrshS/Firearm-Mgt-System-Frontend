import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LossPending } from 'src/app/Core/models/lossPending.model';
import { Officer } from 'src/app/Core/models/Officer.model';
import { FirearmService } from 'src/app/Core/services/firearm.service';

@Component({
  selector: 'app-loss-pending',
  templateUrl: './loss-pending.component.html',
  styleUrls: ['./loss-pending.component.css']
})
export class LossPendingComponent {
  panelOpenState = false;   
  
  dataSource: MatTableDataSource<LossPending> = new MatTableDataSource<LossPending>();
  
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
        this.firearmService.getAllLossPending().subscribe(
          (response: LossPending[]) => {
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
