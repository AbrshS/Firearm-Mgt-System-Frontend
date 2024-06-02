import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThemeService } from 'ng2-charts';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
}) 
export class UserStoreService {
  private fullName$ = new BehaviorSubject<string>('');
  private accountType$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  public getRoleFromStore() {
    return this.accountType$.asObservable();
  }

  public setRoleForStore(accountType: string) {
    this.accountType$.next(accountType);
  } 

  public getFullNameFromStore(){
    return this.fullName$.asObservable()
  } 

  public setFullNameForStore(fullname: string){
    this.fullName$.next(fullname);
  }  

}
