import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { UserModalComponent } from './user-modal/user-modal.component';

interface User {
  id: number;
  efirstname: string,
  middlename: string,
  lastname: string,
  efpid: string,
  job: string,
  jobtype: string,
  unit: string,
  organization: string,
  telephone: string,
  extension : string,
  mobile : string,
  email : string,
  address : string,
  town : string,
  country: string,
  accounttype : string,
  Loginicon: string,
  username : string,
  status : string,
  password: string, 
  isDisabled: boolean 
}

@Component({
  selector: 'app-system-user-accounts',
  templateUrl: './system-user-accounts.component.html',
  styleUrls: ['./system-user-accounts.component.css']
})
export class SystemUserAccountsComponent implements OnInit {
  displayedColumns: string[] = ['REF#', 'NAME', 'UNIT', 'JOB', 'ACCOUNT TYPE', 'ACTION', 'STATUS'];
  dataSource = new MatTableDataSource<User>();
  editForm: FormGroup;
  showUserModal = false; 
  showOfficer = false;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.editForm = this.fb.group({
      accountType: ['', Validators.required],
      loginIcon: ['', Validators.required]
    });
  }  
   
  openUser(): void{
    this.dialog.open(UserModalComponent);
}
openOfficer() {
  this.showOfficer = true; 

}   
  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<User[]>('http://localhost:5141/api/User').subscribe(data => {
      this.dataSource.data = data;
    });
  }

  openEditModal(user: User) {
    const dialogRef = this.dialog.open(EditUserDialog, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateUser(result);
      }
    });
  }

  updateUser(user: User) {
    this.http.put(`http://localhost:5141/api/User/${user.id}`, user).subscribe(() => {
      console.log('User updated successfully!',user);
      this.fetchUsers(); 
    });
  }
  

  // Define openUserModal if it's different from openEditModal or remove this error
  openUserModal(user: User) {
    this.openEditModal(user);
  }

  // Define toggleRow if needed or remove this error
  toggleRow(row: User) {
    // Your logic here
  }
}

@Component({
  selector: 'edit-user-dialog',
  template: `
    <h1 mat-dialog-title>Edit User</h1>
    <div mat-dialog-content>
      <form [formGroup]="editForm">
        <mat-form-field appearance="fill" style="width: 100%;">
          <mat-label>Account Type</mat-label>
          <mat-select formControlName="accountType">
            <mat-option value="Admin">Admin</mat-option>
            <mat-option value="Manager">Manager</mat-option>
            <mat-option value="Guest">Guest</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="fill" style="width: 100%;">
          <mat-label>Login Icon</mat-label>
          <mat-select formControlName="loginIcon">
            <mat-option value="car">Car</mat-option>
            <mat-option value="grenade">Grenade</mat-option>
            <mat-option value="handcuff">Handcuff</mat-option>
            <mat-option value="vest">Vest</mat-option>
            <mat-option value="walkie">Walkie</mat-option>
            <mat-option value="helicopter">Helicopter</mat-option>
            <mat-option value="gun">Gun</mat-option>
            <mat-option value="military">Military</mat-option>
            <mat-option value="officerCup">Officer Cup</mat-option>
            <mat-option value="shoes">Shoes</mat-option>
            <mat-option value="bullet">Bullet</mat-option>
            <mat-option value="tank">Tank</mat-option>
          </mat-select>
        </mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button (click)="save()">Save</button>
    </div>
  `
})
export class EditUserDialog {
  editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      accountType: [data.accounttype, Validators.required],
      loginIcon: [data.Loginicon, Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  } 

  save(): void {
    const updatedUser = { ...this.data, ...this.editForm.value };
    this.dialogRef.close(updatedUser);
  }
}
