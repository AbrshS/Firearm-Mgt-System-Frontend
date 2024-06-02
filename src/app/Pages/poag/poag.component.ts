import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import {FormBuilder } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../firearm-registry/dialog/dialog.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { Officer } from '../../Core/models/Officer.model';
import { FirearmService } from '../../Core/services/firearm.service';
import { Poag } from '../../Core/models/Poag.model';
@Component({
  selector: 'app-poag',
  templateUrl: './poag.component.html',
  styleUrls: ['./poag.component.css']
})
export class PoagComponent {
   

    showPoag = false;
    sidebar: any;
    formValue !: FormGroup;
    firearmRegistryModelObj:any;
    firearmRegistryData !: any;
    showAdd!: boolean;
    showUpdate!: boolean;
    lossData: any = {};
    returnData: any = {}; 
    distructionData: any = {};
    errorMessage!: string;


    openModal() {
      this.showModal = true;
    }
  

    showReturn = false;
    showLoss = false;
    showDistruction = false;
    showModal = false;
      openDistruction(){
        this.showDistruction = true;
      }
    openReturn() {
        this.showReturn = true;
      } 
  
  openLoss(){
    this.showLoss = true;
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
    constructor(private dialog : MatDialog,
       private formBuilder: FormBuilder,
       private firearmService: FirearmService,
       private cdr: ChangeDetectorRef) { 
  
    } 
      
  
    dataSource: MatTableDataSource<Poag> = new MatTableDataSource<Poag>();
  
    displayedColumns: string[] = [
      'REF#',
      'ORGANIZATION',
      'ADDRESS',
      'WHO REGISTERD THE FIREARM',
      'REGISTERED BODY',
      'FIREARM',
      'ACTION',
      'MANAGE'
    ]; 

    ngOnInit(): void {
      this.getAllOfficer();
  
    } 
  
    getAllOfficer(): void {
      this.firearmService.getAllPoag().subscribe(
        (response: Poag[]) => {
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