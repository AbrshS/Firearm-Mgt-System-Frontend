import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from 'src/app/Core/models/user-profile.model';
import { FirearmService } from 'src/app/Core/services/firearm.service';
import { PasswordValidator } from 'src/app/Helper/passwordValidator';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  profileForm: FormGroup;
  profile: UserProfile | undefined;
  changePasswordForm: FormGroup;

  constructor(
    private firearmService: FirearmService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    // Initialize forms with validation rules
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      efpid: [''],
      job: [''],
      unit: [''],
      extension: [''],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      accountType: [''],
      loginIcon: [''],
      username: ['', Validators.required]
    });

    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidator.matchPassword('newPassword', 'confirmPassword')
    });
  }

  ngOnInit(): void {
    this.firearmService.getUserProfile().subscribe(
      (profile) => {
        this.profile = profile;
        this.profileForm.patchValue(this.profile);
      },
      (error) => {
        console.error('Error fetching profile:', error);
      }
    );
  }

  // Method to update user profile
  onUpdateProfile(): void {
    if (this.profileForm.valid) {
      const updatedProfile: UserProfile = {
        ...this.profile,
        ...this.profileForm.value
      };

      this.firearmService.updateUserProfile(updatedProfile).subscribe(
        (response) => {
          alert('Profile updated successfully!');
        },
        (error) => {
          console.error('Error updating profile:', error);
          alert('Failed to update profile.');
        }
      );
    }
  }

  // Method to change password
  onSubmit(): void {
    if (this.changePasswordForm.valid) {
      const formData = {
        currentPassword: this.changePasswordForm.get('currentPassword')?.value,
        newPassword: this.changePasswordForm.get('newPassword')?.value
      };

      this.http.post('http://localhost:5141/api/User/changePassword', formData).subscribe(
        response => {
          console.log('Password changed successfully!', response);
          alert('Password changed successfully!');
        },
        error => {
          console.error('Error changing password', error);
          alert('Failed to change password.');
        }
      );
    }
  }

  // Getters for form controls
  get currentPassword() {
    return this.changePasswordForm.get('currentPassword');
  }

  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

  get passwordMismatch() {
    return this.changePasswordForm.errors?.['mismatch'];
  }
}
