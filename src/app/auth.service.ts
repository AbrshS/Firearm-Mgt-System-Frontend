import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  darkModeEnabled = false;

  constructor() {

  }
   toggleDarkMode(): void{
    this.darkModeEnabled = !this.darkModeEnabled;
   }
}
