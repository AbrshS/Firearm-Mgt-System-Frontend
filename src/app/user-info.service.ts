import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  constructor(private http: HttpClient) {}

  getUserIPAddress(): Observable<any> {
    return this.http.get('https://api.ipify.org?format=json');
  }

  getBrowserInfo(): string {
    const userAgent = window.navigator.userAgent;
    return this.detectBrowser(userAgent);
  }

  private detectBrowser(userAgent: string): string {
    // Add your logic to detect the browser here
    // Example: Check for Chrome
    if (userAgent.indexOf('Chrome') !== -1) {
      return 'Chrome';
    } else if (userAgent.indexOf('Firefox') !== -1) {
      return 'Firefox';
    } else {
      return 'Unknown';
    }
  }
}
