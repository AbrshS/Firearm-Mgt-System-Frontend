import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  sharedData: any; // Define a property to store the shared data
  
  constructor() {}
}
