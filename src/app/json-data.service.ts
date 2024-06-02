import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private jsonServerUrl = 'http://localhost:3000/register'; // Replace with your JSON server URL

  constructor(private http: HttpClient) { }

  getDataFromServer(): Observable<any> {
    const url = `${this.jsonServerUrl}/register`; // Replace 'data' with your JSON server route
    return this.http.get(url);
  }
}
