import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import validateForm from 'src/app/Helper/validateForm';
import { FirearmService } from 'src/app/Core/services/firearm.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css'],
})
export class UserModalComponent implements OnInit {
  signupForm!: FormGroup;
  IsUserModal = true;
  Loginicon: string = '';
  
  constructor(
    public dialogRef: MatDialogRef<UserModalComponent>,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private firearmService: FirearmService,
    private router: Router, 
    private toast: NgToastService
  ){} 


  ngOnInit(): void { 

      this.signupForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        middlename: ['', Validators.required],
        lastname: ['', Validators.required],
        efpid: ['', Validators.required],
        job: ['', Validators.required],
        unit: ['', Validators.required],
        extension: ['', Validators.required],
        mobile: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        accounttype: ['', Validators.required],
        Loginicon: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    
    throw new Error('Method not implemented.');
  }

  signup() {
      // Make the HTTP POST request to the API
      this.http.post<any>('http://localhost:5141/api/User/register', this.signupForm.value).subscribe({
        next: (res) => {
          // console.log('Registration successful:', res); 
          // alert(res.message) 
          this.toast.success({detail: "SUCCESS", summary:res.message, duration: 3000});  
          window.location.reload();
          // Optionally handle success, e.g., display a success message or redirect
        },
        error: (err) => {  
          this.toast.error({detail: "ERROR", summary:err?.error.message, duration: 3000}); 
          // alert(err?.error.message); 
          // console.error('Registration failed:', err); 
          // // Optionally handle error, e.g., display an error message
          // alert('Registration failed. Please try again.');
        }
      });
    } 
  
  
    onClose(): void {
    // Handle closing the modal
    this.dialogRef.close();
  }


}