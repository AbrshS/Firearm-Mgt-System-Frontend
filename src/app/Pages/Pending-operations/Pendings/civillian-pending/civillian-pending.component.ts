import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CivillianPending } from 'src/app/Core/models/civillianPending.model';
import { Officer } from 'src/app/Core/models/Officer.model';
import { FirearmService } from 'src/app/Core/services/firearm.service'; 

@Component({
  selector: 'app-civillian-pending',
  templateUrl: './civillian-pending.component.html',
  styleUrls: ['./civillian-pending.component.css']
})
export class CivillianPendingComponent {
  panelOpenState = false;   
  
  dataSource: MatTableDataSource<CivillianPending> = new MatTableDataSource<CivillianPending>();
  
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
        this.firearmService.getAllCivillianPending().subscribe(
          (response: CivillianPending[]) => {
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
