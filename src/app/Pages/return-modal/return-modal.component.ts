import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog'; 
@Component({
  selector: 'app-return-modal',
  templateUrl: './return-modal.component.html',
  styleUrls: ['./return-modal.component.css']
})
export class ReturnModalComponent implements OnInit{
  
  @Input() returnData: any = {}; 

  @Output() closeModalEvent = new EventEmitter<boolean>();



  ReturnForm: FormGroup = new FormGroup({}) 
  
  isReturnModal: any;
  // Function to close the modal
  closeModal() {
    this.isReturnModal = false; 
  } 

  
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
    ){

  } 

  ngOnInit(): void { 

    this.ReturnForm = this.formBuilder.group({
      fpId:['',],  
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
      firearmReturnedTo: [''],  //this will be for reason to return
      reportedBy: [''],
      authorizedBy: ['',],
      authorizedDate: [new Date()],
      //for the return part
      reasonToReturn: ['',],  

      //to display the status 
      status: ['returned'],
    }); 

   
  }

 onSubmit(){
  this.http.post('http://localhost:5141/api/Firearm', this.ReturnForm.value).subscribe(
    (response) => {
      console.log('Successfully submitted:', response); 
      window.location.reload();
      // Handle success, e.g., show a success message or redirect
    },
    (error) => {
      console.error('Error:', error); 
      alert('Fail To Register')
      // Handle error, e.g., display an error message
    }
  );
 }

}
