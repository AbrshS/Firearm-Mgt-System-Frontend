import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthGuard } from 'src/app/Core/Guards/auth.guard';
import { FirearmService } from 'src/app/Core/services/firearm.service';
import { UserStoreService } from 'src/app/Core/services/user-store.service';
import validateForm from 'src/app/Helper/validateForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  Loginicon: string = '';
  navigate: any;

  constructor(private fb: FormBuilder,
    private firearmService: FirearmService,
    private router: Router, 
  private toast: NgToastService,
private auth: AuthGuard, 
private userStore: UserStoreService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      loginicon: ['', Validators.required], // Assuming you have a login icon field
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);  
      this.firearmService.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{ 
          this.loginForm.reset(); 
          this.firearmService.storeToken(res.token);
          const tokenPayload = this.firearmService.decodeToken();
          this.userStore.setFullNameForStore(tokenPayload.unique_name); 
          this.userStore.setRoleForStore(tokenPayload.accountType);
          this.toast.success({detail: "SUCCESS", summary:res.message, duration: 3000});  
          this.router.navigate(['/dashboard']);  

        }, 
        error:(err)=> {
          // alert(err?.error.message) 
          this.toast.error({detail: "ERROR", summary:err?.error.message, duration: 8000});

        }
      })


    } else {
   
      console.log('login failed');
      validateForm.validateAllFormFields(this.loginForm);
    }
  }

  updateInput(event: Event) {
    const selectedCheckbox = event.target as HTMLInputElement;
    this.Loginicon = selectedCheckbox.nextElementSibling?.textContent || '';
    this.loginForm.patchValue({
      loginicon: this.Loginicon,
    });
  }
}
