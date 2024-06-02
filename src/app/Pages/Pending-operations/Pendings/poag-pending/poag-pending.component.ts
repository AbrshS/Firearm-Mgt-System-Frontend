import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LossPending } from 'src/app/Core/models/lossPending.model';
import { Officer } from 'src/app/Core/models/Officer.model';
import { PoagPending } from 'src/app/Core/models/poagPending.model';
import { FirearmService } from 'src/app/Core/services/firearm.service';

@Component({
  selector: 'app-poag-pending',
  templateUrl: './poag-pending.component.html',
  styleUrls: ['./poag-pending.component.css']
})
export class PoagPendingComponent {
  panelOpenState = false;   
  
  dataSource: MatTableDataSource<PoagPending> = new MatTableDataSource<PoagPending>();
  
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
        this.firearmService.getAllPoagPending().subscribe(
          (response: PoagPending[]) => {
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