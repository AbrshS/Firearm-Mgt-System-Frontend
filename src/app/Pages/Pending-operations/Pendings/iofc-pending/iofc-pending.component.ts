import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IofcPending } from 'src/app/Core/models/iofcPending.model';
import { Officer } from 'src/app/Core/models/Officer.model';
import { FirearmService } from 'src/app/Core/services/firearm.service';

@Component({
  selector: 'app-iofc-pending',
  templateUrl: './iofc-pending.component.html',
  styleUrls: ['./iofc-pending.component.css']
})
export class IofcPendingComponent {
  panelOpenState = false;   
  
  dataSource: MatTableDataSource<IofcPending> = new MatTableDataSource<IofcPending>();
  
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
        this.firearmService.getAllIofcPending().subscribe(
          (response: IofcPending[]) => {
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
