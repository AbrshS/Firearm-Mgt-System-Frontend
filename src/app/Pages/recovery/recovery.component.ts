
import { Component, Input, OnInit } from '@angular/core';
import { DataSharingService } from '../../data-sharing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
//import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Officer } from '../../Core/models/Officer.model';
import { Firearm } from '../../Core/models/Firearm.model';
import { FirearmService } from '../../Core/services/firearm.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  @Input() lossData: any;  
  RecoveryForm!: FormGroup;
  
  form!: FormGroup 

  constructor(
    private cdr: ChangeDetectorRef, 
    private firearmService: FirearmService, 
    private  formBuilder: FormBuilder,
    private http: HttpClient,
    private dialog: MatDialog) {}
   
    isRecoveryModal: boolean = true;
  // Function to close the modal
  closeModal() {
    this.isRecoveryModal = false; 
    window.location.reload();
  } 

    ngOnInit(): void { 
  
      this.RecoveryForm = this.formBuilder.group({
        fullName: ['', ],
        fpId:['',],  
        lholder:['Lost',],
        manufacturerSerial: ['',],
        isFirearm: ['' ],
        dateMarked: [new Date()],
        markedBy: [''],
        firearmType: [''],
        firearmModel: [''],
        firearmMechanism: [''],
        firearmCalibre: [''],
        magazineCapacity: [''],
        manufacturer: [''],
        yearManufacture: [new Date()],
        source: [''], 
        store: [''],
        additionalComment: [''],
        reportedOn:[new Date()],
        comment:['',],  
        //the recovery part 
        firearmReturnedTo: [''], 
        reportedBy: ['',],
        authorizedBy: ['',],
        authorizedDate: [new Date()],
        //for the return part
        reasonToReturn: ['',], 
        //to display the status 
        status: ['Recoverd',],
        
  })
  }     

  OnSubmit() {
    // Send the payload to your API
    this.http.post('http://localhost:5141/api/Firearm', this.RecoveryForm.value).subscribe(
      (response: any) => {
        console.log('Successfully submitted:', response);
        alert('Successfully submitted') 
        const createdFirearmId = response.id; 
        console.log('Created Firearm ID:', createdFirearmId);
        this.deleteOfficerById(createdFirearmId);

        // Handle success, e.g., show a success message or redirect
      },
      (error) => {
        console.error('Error:', error); 
        alert('Fail To Register')
        // Handle error, e.g., display an error message
      }
    );
  }

  deleteOfficerById(id: number) {
    const url = `http://localhost:5141/api/Loss/${id}`;
  
    this.http.delete(url).subscribe(
      () => {
        console.log('Firearm deleted successfully.', id);
      },
      (error) => {
        console.error('Error deleting firearm:', error);
      }
    );
  }
  







}
