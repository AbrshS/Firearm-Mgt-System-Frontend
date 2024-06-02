import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-civil',
  templateUrl: './civil.component.html',
  styleUrls: ['./civil.component.css'],
}) 

export class CivilComponent implements OnInit {
  CivillianForm!: FormGroup;

  @Input() civilData: any = {}; //to copy the data from the firearm table

  form!: FormGroup;   

  isCivilModal: boolean = true;
  // Function to close the modal
  closeModal() {
    this.isCivilModal = false; 
    window.location.reload();
  }  

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.CivillianForm = this.formBuilder.group({
      fullname: [''],
      nationality: [''],
      dateOfBirth: [new Date()],
      sex: [''],
      acadamicStatus: [''],
      martialStatus: [''],
      medicalStatus: [''],
      occupation: [''],
      sizeOfCapital: [''],
      state: [''],
      subcity: [''],
      district: [''],
      kebele: [''],
      specificArea: [''],
      passportId: [''],
      phonenumber: [''],
      homenumber: [''],

      manufacturerSerial: [''],
      isFirearm: [''],
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

      registeredPosition: [''],
      registeredFullName: [''],
      registeredTitle: [''],
      registeredSignature: [''],
      registeredDate: [new Date()],

      // The registered body

      registeredBodyFullName: [''],
      registeredBodyResponsibility: [''],
      registeredBodySignature: [''],
      registeredBodyDate: [new Date()],
      // Add more form controls as needed
    });
  }

  onSubmit() {
    this.http
      .post('http://localhost:5141/api/Civillian', this.CivillianForm.value)
      .subscribe(
        (response) => {
          console.log('Successfully submitted:', response);
        },
        (error) => {
          console.error('Error:', error);
          alert('Failed to Register');
        }
      );
  }
}