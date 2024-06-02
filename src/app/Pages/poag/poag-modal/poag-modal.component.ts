import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poag-modal',
  templateUrl: './poag-modal.component.html',
  styleUrls: ['./poag-modal.component.css'],
})
export class PoagModalComponent implements OnInit {
  @Input() poagData: any = {}; //
  @Output() closeModalEvent = new EventEmitter<boolean>();
  
  IsPoag = false;
  // Function to close the modal
  closeModal() {
    this.IsPoag = false; 
    window.location.reload();
  }
  
  poagForm: FormGroup = new FormGroup({});
  option1: string = '';
  option2: string = '';
  option3: string = '';

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.poagForm = this.formBuilder.group({
      nameOfOrganisation: [''],
      sector: [''],
      sizeOfCapital: [''],
      region: [''],
      subcity: [''],
      district: [''],
      kebele: [''],
      specificArea: [''],
      phoneNumber: [''],
      email: [''],
      //
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
      //
      registeredPosition: [''],
      registeredFullName: [''],
      registeredTitle: [''],
      registeredResponsibility: [''],
      registeredSignature: [''],
      registeredDate: [new Date()],
      // The registered body
      registeredBodyFullName: [''],
      registeredBodyResponsibility: [''],
      registeredBodySignature: [''],
      registeredBodyDate: [new Date()],
    });
  }

  onSubmit() {
    this.http
      .post('http://localhost:5141/api/Poag', this.poagForm.value)
      .subscribe(
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
