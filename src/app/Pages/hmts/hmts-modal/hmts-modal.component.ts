import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hmts-modal',
  templateUrl: './hmts-modal.component.html',
  styleUrls: ['./hmts-modal.component.css']
})
export class HmtsModalComponent implements OnInit {

  option1: string = "";
  option2: string = "";
  option3: string = "";
  form!: FormGroup;   

  hmtsForm: FormGroup = new FormGroup({ })
  @Output() closeModalEvent = new EventEmitter<boolean>();


  @Input() hmtsData: any = {};  

 
  isHmtsModal: boolean = true;
  // Function to close the modal
  closeModal() {
    this.isHmtsModal = false; 
    window.location.reload();
  } 

 

  constructor(private formBuilder: FormBuilder, 
    private http: HttpClient) {}

  ngOnInit() {
    this.hmtsForm = this.formBuilder.group({ 

          countryOfOrigin: ['',],
          licensedCountry:	['',],
          levelOfService: ['',],
          subcity:	['',],
          district:	['',],
          kebele:	['',],
          specificArea:	['',],
          phoneNumber:	['',],
          passportNo: ['',],
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
    this.http.post('http://localhost:5141/api/Hmts', this.hmtsForm.value).subscribe(
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
