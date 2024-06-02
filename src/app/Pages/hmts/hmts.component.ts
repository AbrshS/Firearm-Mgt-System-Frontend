import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../firearm-registry/dialog/dialog.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { FirearmService } from '../../Core/services/firearm.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Hmts } from '../../Core/models/Hmts.model';

@Component({
  selector: 'app-hmts',
  templateUrl: './hmts.component.html',
  styleUrls: ['./hmts.component.css'],
})
export class HmtsComponent implements OnInit {
  showhmts = false;
  sidebar: any;
  formValue!: FormGroup;
  firearmRegistryModelObj: any;
  firearmRegistryData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  lossData: any = {};
  returnData: any = {};
  distructionData: any = {};
  errorMessage!: string;

  showReturn = false;
  showLoss = false;
  showDistruction = false;
  showModal = false;
  openDistruction() {
    this.showDistruction = true;
  }
  openReturn() {
    this.showReturn = true;
  }

  openLoss() {
    this.showLoss = true;
  }
  @Output() SendDataToLossEvent = new EventEmitter<any>();
  @Output() SendDataToReturnEvent = new EventEmitter<any>();
  @Output() SendDataToDistructionEvent = new EventEmitter<any>();

  sendDataToLoss(dataItem: any) {
    this.SendDataToLossEvent.emit(dataItem);
    this.lossData = dataItem;
  }

  sendDataToReturn(dataItem: any) {
    this.SendDataToReturnEvent.emit(dataItem);
    this.returnData = dataItem;
  }

  sendDataToDistruction(dataItem: any) {
    this.SendDataToDistructionEvent.emit(dataItem);
    this.distructionData = dataItem;
  }
  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private firearmService: FirearmService,
    private http: HttpClient
  ) {}

  dataSource: MatTableDataSource<Hmts> = new MatTableDataSource<Hmts>();

  displayedColumns: string[] = [
    'REF#',
    'AGENT',
    'ADDRESS',
    'WHO REGISTERD THE FIREARM',
    'REGISTERED BODY',
    'FIREARM',
    'ACTION',
    'MANAGE',
  ];

  ngOnInit(): void {
    this.getAllHmts();
  }
  getAllHmts() {
    this.firearmService.getAllHmts().subscribe(
      (response: Hmts[]) => {
        if (response && response.length > 0) {
          this.dataSource.data = response; // Assign the data to the data source
          console.log('Connected Successfully', response);
        } else {
          console.error('API response is empty or undefined');
        }
      },
      (error) => {
        console.error('Error fetching data from API:', error);
        this.errorMessage =
          'An error occurred while fetching data from the API.';
      }
    );
  }
}