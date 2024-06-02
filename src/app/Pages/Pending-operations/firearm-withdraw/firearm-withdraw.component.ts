import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Officer } from 'src/app/Core/models/Officer.model';
import { FirearmService } from 'src/app/Core/services/firearm.service';

@Component({
  selector: 'app-firearm-withdraw',
  templateUrl: './firearm-withdraw.component.html',
  styleUrls: ['./firearm-withdraw.component.css']
})
export class FirearmWithdrawComponent implements OnInit{
 
  panelOpenState = false;   
  
  dataSource: MatTableDataSource<Officer> = new MatTableDataSource<Officer>();
  
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
        this.firearmService.getallOfficerPending().subscribe(
          (response: Officer[]) => {
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