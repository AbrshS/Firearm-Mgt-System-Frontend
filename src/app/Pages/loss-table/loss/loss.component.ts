import { Component, Input, OnInit } from '@angular/core';
import { DataSharingService } from '../../../data-sharing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
//import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Officer } from '../../../Core/models/Officer.model';
import { Firearm } from '../../../Core/models/Firearm.model';
import { FirearmService } from '../../../Core/services/firearm.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';


// import { ErrorPopupComponent } from '../../error-popup/error-popup.component';
//import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-loss',
  templateUrl: './loss.component.html',
  styleUrls: ['./loss.component.css']
})
export class LossComponent implements OnInit { 

  @Input() lossData: any;  

  Isloss: boolean = true;
  LossForm!: FormGroup;
  myForm!: FormGroup; 
  officerForm!: FormGroup;

  form!: FormGroup
  dataSource: any;
  errorMessage!: string;
 

  constructor(
    private cdr: ChangeDetectorRef, 
    private firearmService: FirearmService, 
    private  formBuilder: FormBuilder,
    private http: HttpClient,
    private dialog: MatDialog,
) {}

  ngOnInit(): void { 
  
    this.LossForm = this.formBuilder.group({ 

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
      comment:['',] 
      
});

}      
closemodal(){
  this.Isloss = false;
  window.location.reload();
}

    
OnSubmit() {
  // Send the payload to your API
  this.http.post('http://localhost:5141/api/Loss', this.LossForm.value).subscribe(
    (response: any) => {
      console.log('Successfully submitted:', response);
      
       alert('Successfully submitted');
      const createdFirearmId = response.id; 
      console.log('Created Firearm ID:', createdFirearmId);
       window.location.reload();      // Call the deleteOfficerById method here
      this.deleteOfficerById(createdFirearmId);
      
      // Handle success, e.g., show a success message or redirect
    },
    
    (error) => {
      console.error('Error:', error);
   
      alert('error');
      // Handle error, e.g., display an error message
    }
  );
} 


deleteOfficerById(id: number) {
  const url = `http://localhost:5141/api/Officer/${id}`;

  this.http.delete(url).subscribe(
    () => {
      console.log('Firearm deleted successfully.');
    },
    (error) => {
      console.error('Error deleting firearm:', error);
    }
  );
}




}



 
