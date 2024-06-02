import { Component } from '@angular/core';
import {  OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Officer } from '../../Core/models/Officer.model';
import { Firearm } from '../../Core/models/Firearm.model';
import { FirearmService } from '../../Core/services/firearm.service';
import { FormGroup } from '@angular/forms'; 
import { Loss } from '../../Core/models/Loss.model';
@Component({
  selector: 'app-loss-table',
  templateUrl: './loss-table.component.html',
  styleUrls: ['./loss-table.component.css']
})
export class LossTableComponent {

  option1: string = "";
  option2: string = "";
  option3: string = "";

  loss: Loss[] = [];
  errorMessage: string | undefined;
  formValue!: FormGroup;
  dataFromApi: any;
  
  //to copy the data to the modal component 
   
  lossData: any = {};

  @Output() SendDataToLossEvent = new EventEmitter<any>(); 
  
  sendDataToLoss(dataItem: any) { 
    this.SendDataToLossEvent.emit(dataItem)
    this.lossData = dataItem;
  } 

   
  showRecovery = false; 
  showDistruction = false;

  sidebar: any; 


  openRecovery() {
      this.showRecovery = true;
    } 


    dataSource: MatTableDataSource<Loss> = new MatTableDataSource<Loss>();
  
    displayedColumns: string[] = [
      'REF#',
      'REPORTED BY',
      'FIREARM',
      'REPORTED ON',
      'ACTION',
      'MANAGE'
    ]; 
  

constructor( 
  private cdr: ChangeDetectorRef,
   private firearmService: FirearmService) {} 

  

// second.component.ts
ngOnInit(): void {    
   this.getAllLoss();
  }  

  getAllLoss(): void {
    this.firearmService.getallLoss().subscribe(
      (response: Loss[]) => {
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
