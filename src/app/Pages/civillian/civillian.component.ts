import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import {FormBuilder } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../firearm-registry/dialog/dialog.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { Civillian } from '../../Core/models/Civillian.model';
import { FirearmService } from '../../Core/services/firearm.service';

@Component({
  selector: 'app-civillian',
  templateUrl: './civillian.component.html',
  styleUrls: ['./civillian.component.css']
})
export class CivillianComponent {

  option1: string = "";
  option2: string = "";
  option3: string = "";
  showcivil = true;
  sidebar: any; 

  showReturn = false;
  showLoss = false;
  showDistruction = false; 

  
  lossData: any = {};
  returnData: any = {}; 
  distructionData: any = {};
  errorMessage: string | undefined;


    opencivil() {
      this.showcivil = true;
    }
  
    closecivil() {
      this.showcivil = true; 
      window.location.reload();
    } 

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
    openDistruction(){
      this.showDistruction = true;
    }
  openReturn() {
      this.showReturn = true;
    } 

openLoss(){
  this.showLoss = true;
}
  
    formValue !: FormGroup;
    firearmRegistryModelObj:any;
    firearmRegistryData !: any;
    showAdd!: boolean;
    showUpdate!: boolean;
    
    constructor(private dialog : MatDialog, 
      private formBuilder: FormBuilder,
      private firearmService: FirearmService,
      private cdr: ChangeDetectorRef) { 
  
    }  
    
    dataSource: MatTableDataSource<Civillian> = new MatTableDataSource<Civillian>();
  
    displayedColumns: string[] = [
      'REF#',
      'FIREARM',
      'PERSONAL',
      'ACADAMIC STATUS',
      'MARRITIAL STATUS',
      'OCCUPATION', 
      'ACTION',
      'MANAGE'
    ];

    
ngOnInit(): void {
        this.getAllCivillian();
} 


getAllCivillian(): void {
  this.firearmService.getAllCivillian().subscribe(
    (response: Civillian[]) => {
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
    
 
   

   
   
   

