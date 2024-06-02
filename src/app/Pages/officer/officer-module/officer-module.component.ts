import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from '../../../data-sharing.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Firearm } from '../../../Core/models/Firearm.model';
import { FirearmService } from '../../../Core/services/firearm.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-officer-module',
  templateUrl: './officer-module.component.html',
  styleUrls: ['./officer-module.component.css'],
}) 

export class OfficerModuleComponent implements OnInit {
  officerForm!: FormGroup;
  myForm!: FormGroup;
  showPopupFlag = 0;
  sharedData: any;
  showPoag = false;
  sidebar: any;
  dataSource: MatTableDataSource<Firearm> = new MatTableDataSource<Firearm>();

  isModalShown: boolean = true;
  // Function to close the modal 
  closeModal() {
    this.isModalShown = false; 
    window.location.reload();
  }

  @Input() childData: any = {}; //to copy the data to the officer modal

  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dataSharingService: DataSharingService,
    private dialog: MatDialog,
    private firearmService: FirearmService,
    private toast: NgToastService
  ) {}

  ngOnInit() {
    this.officerForm = this.formBuilder.group({
      // Personal Information
      fullName:['', Validators.required],
      fpId: ['', Validators.required],
      title:['', Validators.required],
      position: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      description:['', Validators.required],
      //firearm Detail
      manufacturerSerial:['', Validators.required],
      isFirearm: ['', Validators.required],
      dateMarked: [new Date()],
      markedBy: ['', Validators.required],
      firearmType: ['', Validators.required],
      firearmModel:['', Validators.required],
      firearmMechanism: ['', Validators.required],
      firearmCalibre: ['', Validators.required],
      magazineCapacity: ['', Validators.required],
      manufacturer: ['', Validators.required],
      yearManufacture: [new Date()],
      source: ['', Validators.required],
      store: ['', Validators.required],
      holder: ['Officer'],
      additionalComment: ['', Validators.required],
      // The body that registered the weapon
      registeredPosition: ['', Validators.required],
      registeredFullName: ['', Validators.required],
      registeredTitle:['', Validators.required],
      registeredEmail: ['', Validators.required],
      registeredSignature: ['', Validators.required],
      registeredDate: [new Date()],
      // The registered body
      registeredBodyFullName:['', Validators.required],
      registeredBodyResponsibility:['', Validators.required],
      registeredBodySignature:['', Validators.required],
      registeredBodyDate: [new Date()], 
      //for notification 
      userfullname: [''], 
      isRead: [''] ,
      sentDate: [new Date()]  

    });
  }

  OnSubmit() {
    // Send the payload to your API to create a new firearm record
    this.http
      .post('http://localhost:5141/api/OfficerPending', this.officerForm.value)
      .subscribe(
        (response: any) => {
          console.log('Successfully submitted:', response);

          // After successful submission, get the ID of the created firearm
          const createdFirearmId = response.id;
          console.log('Created Firearm ID:', createdFirearmId);
          this.deleteFirearmById(createdFirearmId);
          // Use the service method to delete the firearm by ID
         
          this.postNotification(); 
          this.toast.success({detail: "SUCCESS", summary:response.message, duration: 3000});  
          // window.location.reload();
        },
        (error) => {
          console.error('Error:', error); 
          this.toast.error({detail: "ERROR", summary:error?.error.message, duration: 8000});

          alert('Failed to Register');
        }
      );
  }

  deleteFirearmById(id: number) {
    this.firearmService.deleteFirearmById(id).subscribe(
      () => {
        console.log('Firearm deleted successfully.');
      },
      (error) => {
        console.error('Error deleting firearm:', error);
      }
    );
  }

  postWithdrawalFirearm() {
    const postData = {
      manufacturerSerial: this.officerForm.value.manufacturerSerial, // Example: Replace 'ABC123' with the actual serial number
      withdrawalDate: new Date().toISOString(), // Example: Use the current date or the date you want to send
    };

    this.http.post('http://localhost:5141/api/Withdrawals', postData).subscribe(
      () => {
        console.log('Withdrawal successfully posted.');
      },
      (error) => {
        console.error('Error posting withdrawal:', error);
      }
    );
  }

  postFirearmHolder() {
    const postData = {
      holder: this.officerForm.value.holder, // Example: Replace 'ABC123' with the actual serial number
      // Example: Use the current date or the date you want to send
    };

    this.http
      .post('http://localhost:5141/api/FirearmHolder', postData)
      .subscribe(
        () => {
          console.log('Firearm Holder successfully posted.');
        },
        (error) => {
          console.error('Error posting withdrawal:', error);
        }
      );
  } 


  postNotification(){
    const postData = {
      holder: this.officerForm.value.holder, // Example: Replace 'ABC123' with the actual serial number
      store: this.officerForm.value.store, 
      sentDate: this.officerForm.value.sentDate
    }; 

    this.http
    .post('http://localhost:5141/api/Notification', postData)
    .subscribe(
      () => {
        console.log('Notification Sent.');
      },
      (error) => {
        console.error('Fail to Send notification:', error);
      }
    );
    
  }
}
