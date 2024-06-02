import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../shared-service.service';
import { ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Officer } from '../../Core/models/Officer.model';
import { Firearm } from '../../Core/models/Firearm.model';
import { FirearmService } from '../../Core/services/firearm.service';
import { FormGroup } from '@angular/forms'; 
import { LossComponent } from '../loss-table/loss/loss.component';  
import { Destroyed } from '../../Core/models/Destroyed.model';

@Component({
  selector: 'app-destroyed-table',
  templateUrl: './destroyed-table.component.html',
  styleUrls: ['./destroyed-table.component.css']
})
export class DestroyedTableComponent implements OnInit { 
  option1: string = "";
  option2: string = "";
  option3: string = "";
  transferredData: any[] = []; 
  showModal = false;
  Officer: Officer[] = [];
  errorMessage: string | undefined;
  formValue!: FormGroup;
  dataFromApi: any;
  
  //to copy the data to the modal component 
   
  lossData: any = {};
  returnData: any = {}; 
  distructionData: any = {};

  @Output() SendDataToLossEvent = new EventEmitter<any>(); 
  @Output() SendDataToReturnEvent = new EventEmitter<any>(); 
  @Output() SendDataToDistructionEvent = new EventEmitter<any>();

  sendDataToLoss(dataItem: any) { 
    this.SendDataToLossEvent.emit(dataItem)
    this.lossData = dataItem;
  }   

sendDataToReturn(dataItem: any) {
  this.SendDataToReturnEvent.emit(dataItem)
  this.returnData = dataItem;
}
 

sendDataToDistruction(dataItem: any) {
  this.SendDataToDistructionEvent.emit(dataItem)
  this.distructionData = dataItem;
}
openModal() {
    this.showModal = true;
  }

closeModal() {
    this.showModal = false;
    this.showReturn = false;
  }  

  showReturn = false;
  showLoss = false;
  showDistruction = false;
  sidebar: any; 

    openDistruction(){
      this.showDistruction = true;
    }
  openReturn() {
      this.showReturn = true;
    } 

openLoss(){
  this.showLoss = true;
}
    dataSource: MatTableDataSource<Destroyed> = new MatTableDataSource<Destroyed>();
  
    displayedColumns: string[] = [
      'REF#',
      'DESTRUCTION DATE',
      'WHO REQUEST',
      'REASON FOR DESTRUCTION',
      'AUTHORIZED BY', 
      'FIREARM',
      'MANAGE'
    ];
  

constructor(private cdr: ChangeDetectorRef, 
  private firearmService: FirearmService) {}
// second.component.ts
ngOnInit(): void {
         
   this.getAllDestroyed();
  }  

  getAllDestroyed(): void {
    this.firearmService.getAllDestroyed().subscribe(
      (response: Destroyed[]) => {
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

showPopupFlag = 0;

showPopup(popupNumber: number) {
  this.showPopupFlag = popupNumber;
}

hidePopup() {
  this.showPopupFlag = 1;
  this.showPopupFlag = 2;
  this.showPopupFlag = 3;
}

} 
function openModel() {
  throw new Error('Function not implemented.');

  } 