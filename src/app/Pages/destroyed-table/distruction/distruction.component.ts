import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { ErrorPopupComponent } from '../../error-popup/error-popup.component';

import { FirearmService } from '../../../Core/services/firearm.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-distruction',
  templateUrl: './distruction.component.html',
  styleUrls: ['./distruction.component.css']
})
export class DistructionComponent implements OnInit {
  @Input() distructionData: any;  


  destructionForm!: FormGroup;
  
  form!: FormGroup
  dataSource: any;
  errorMessage!: string;
 
  
  isdistructionModal = true;
  // Function to close the modal
  closeModal() {
    this.isdistructionModal = false; 
    window.location.reload();
  } 

  constructor(
    private cdr: ChangeDetectorRef, 
    private firearmService: FirearmService, 
    private  formBuilder: FormBuilder,
    private http: HttpClient,
    private dialog: MatDialog) {}

  ngOnInit(): void { 
  
    this.destructionForm = this.formBuilder.group({ 

      destructionDate: [new Date()],
      destructionRequestedBy: ['',], 
      reasonForDestruction: [''], 
      authorizedBy: [''],  
      //firearm detail 
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
      comment:['',]  
})
}     

OnSubmit() {
  // Send the payload to your API
  this.http.post('http://localhost:5141/api/Destroyed', this.destructionForm.value).subscribe(
    (response) => {
      console.log('Successfully submitted:', response);  
      // Handle success, e.g., show a success message or redirect
    },
    
    (error) => {
      console.error('Error:', error);
      // this.showErrorPopup();
      alert('error')
      // Handle error, e.g., display an error message
    }
  );
}
 
}