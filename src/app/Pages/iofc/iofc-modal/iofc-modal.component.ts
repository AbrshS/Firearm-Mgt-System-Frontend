import { group } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iofc-modal',
  templateUrl: './iofc-modal.component.html',
  styleUrls: ['./iofc-modal.component.css']
})
export class IofcModalComponent implements OnInit {
 
  option1: string = "";
  option2: string = "";
  option3: string = ""; 
  
  @Input() iofcData: any = {};  //read data fom the firearm table 

  isIofcModal: boolean = true;
  // Function to close the modal
  closeModal() {
    this.isIofcModal = false; 
    window.location.reload();
  } 
  
   iofcForm: FormGroup = new FormGroup({ });


  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) {}

  ngOnInit() {
    this.iofcForm = this.formBuilder.group({ 

      //iofc detail 
      fullName: ['',], 
      candidateCountry: ['',],
      evidenceOfMedical: ['',],
      passportNo: ['',],
      reasonHeCame: ['',],
      comingDate: [new Date()], 

      countryOfResidence: ['',], 
      region:	['',],
      subcity:	['',],
      district:	['',],
      kebele:	['',],
      specificArea:	['',],
      phoneNumber:	['',],
      email: ['',], 
      
      //firearm Detail  
      manufacturerSerial: ['',],
      isFirearm: ['', ],
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
      //the body who registed the weapon 
      registeredBodyFullName: ['',], 
      registeredBodyPosition: ['',],
      registeredBodyResponsibility: ['',],
      registeredBodySignature: ['', ],
      registeredBodyDate: [new Date()],
      //the registered body 
      registeredPosition: ['',],
      registeredFullName: ['', ],
      registeredTitle: ['', ],
      registeredResponsibility: ['',],
      registeredSignature: ['', ],
      registeredDate: [new Date()]
    });

  }

 

  onSubmit() {
    this.http.post('http://localhost:5141/api/Iofc', this.iofcForm.value).subscribe(
      (response) => {
        console.log('Successfully submitted:', response);
        alert('Successfully submitted');
      },
      (error) => {
        console.error('Error:', error);
        alert('Failed to Register');
      }
    );
  }
  
}