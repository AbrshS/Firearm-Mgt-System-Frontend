import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firearm } from '../models/Firearm.model';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable, map } from 'rxjs';
import { Officer } from '../models/Officer.model';
import { Loss } from '../models/Loss.model';
import { Destroyed } from '../models/Destroyed.model';
import { Civillian } from '../models/Civillian.model';
import { Poag } from '../models/Poag.model';
import { Iofc } from '../models/Iofc.model';
import { Hmts } from '../models/Hmts.model';
import { User } from '../models/Users.mode';
import { Withdraw } from '../models/withdraw.model';
import { FirearmHolder } from '../models/FirearmHolder.model';
import { OfficerPending } from '../models/OfficerPending.model';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserStoreService } from './user-store.service';
import jwtDecode from 'jwt-decode';
import { CivillianPending } from '../models/civillianPending.model';
import { PoagPending } from '../models/poagPending.model';
import { IofcPending } from '../models/iofcPending.model';
import { HmtsPending } from '../models/hmtsPending.model';
import { LossPending } from '../models/lossPending.model';
import { DistrictionPending } from '../models/distructionPending.model';
import { RecoverPending } from '../models/recoverPending.model';
import { UserProfile } from '../models/user-profile.model';

@Injectable({
  providedIn: 'root',
})
export class FirearmService {
  private logoutTimer: any;


  //authentication and authorization
  authBaseURL = 'http://localhost:5141/api/User/';

  baseUrl = 'http://localhost:5141/api/Firearm/firearm';
  getFirearmByType = 'http://localhost:5141/api/Firearm/firearm-type-counts';
  getFirearmBySource =
    'http://localhost:5141/api/Firearm/firearm-source-counts';
  // getFirearmByHolder = 'http://localhost:5141/api/Firearm/firearm-holder-counts';

  //Daily Graph
  getDailyLossFirearm = 'http://localhost:5141/api/Loss/count-losses/day';
  getDailyDestroyedFirearm =
    'http://localhost:5141/api/Destroyed/count-destroyed/day';
  getDailyReturnedFirearm =
    'http://localhost:5141/api/Firearm/count-daily-returned-firearm';
  getDailyRecoveredFirearm =
    'http://localhost:5141/api/Firearm/count-daily-recoverd-firearm';
  getDailyWithdrawFirearm = 'http://localhost:5141/api/Withdrawals/count/daily';

  //weekly graph
  getWeeklyLossFirearm = 'http://localhost:5141/api/Loss/count-losses/week';
  getWeeklyDestroyedFirearm =
    'http://localhost:5141/api/Destroyed/count-destroyed/week';
  getWeeklyReturnedFirearm = 'http://localhost:5141/api/Firearm/weekly';
  getWeeklyRecoveredFirearm =
    'http://localhost:5141/api/Firearm/count-weekly-recover-firearm';
  getweeklyWithdrawFirearm =
    'http://localhost:5141/api/Withdrawals/count/weekly';

  //monthly graph
  getMonthlyLossFirearm = 'http://localhost:5141/api/Loss/count/monthly';
  getMonthlyDestroyedFirearm =
    'http://localhost:5141/api/Destroyed/count-destroyed/month';
  getMonthlyReturnedFirearm = 'http://localhost:5141/api/Firearm/monthly';
  getMonthlyRecoveredFirearm =
    'http://localhost:5141/api/Firearm/count-monthly-recover-firearm';
  getMonthlyWithdrawFirearm =
    'http://localhost:5141/api/Withdrawals/count/weekly';

  //Yearly graph
  getYearlyLossFirearm = 'http://localhost:5141/api/Loss/count-losses/yearly';
  getYearlyDestroyedFirearm =
    'http://localhost:5141/api/Destroyed/count-destroyed/year';
  getYearlyReturnedFirearm = 'http://localhost:5141/api/Firearm/yearly';
  getYearlyRecoveredFirearm =
    'http://localhost:5141/api/Firearm/count-yearly-recover-firearm';
  getYearlyWithdrawFirearm =
    'http://localhost:5141/api/Withdrawals/count/yearly';

  //for the withdraw graph
  postwithdrawFirearm = 'http://localhost:5141/api/Withdrawals';
  postfirearmHolder = 'http://localhost:5141/api/FirearmHolder';
  getfirearmHolder =
    'http://localhost:5141/api/FirearmHolder/firearm-type-counts';

  //pending operations    
   
  postOfficerPending = 'http://localhost:5141/api/OfficerPending'; 
  getOffcierPending = 'http://localhost:5141/api/OfficerPending';    
  deleteOfficerPending = 'http://localhost:5141/api/OfficerPending';

  postCivillianPending = 'http://localhost:5141/api/CivillianPending'; 
  getCivillianPending = 'http://localhost:5141/api/CivillianPending'; 
  deleteCivillianPending = 'http://localhost:5141/api/CivillianPending/1';

   postPoagPending = 'http://localhost:5141/api/PoagPending'; 
   getPoagPending = 'http://localhost:5141/api/PoagPending'; 
   deletePoagPending = 'http://localhost:5141/api/PoagPending';

   postIofcPending = 'http://localhost:5141/api/IofcPending'; 
   getIofcPending = 'http://localhost:5141/api/IofcPending'; 
   deleteIofcPending = 'http://localhost:5141/api/IofcPending';

   postHmtsPending = 'http://localhost:5141/api/HmtsPending'; 
   getHmtsPending = 'http://localhost:5141/api/HmtsPending'; 
   deleteHmtsPending = 'http://localhost:5141/api/HmtsPending';

   postLossPending = 'http://localhost:5141/api/LossPending'; 
   getLossPending = 'http://localhost:5141/api/LossPending'; 
   deleteLossPending = 'http://localhost:5141/api/LossPending';

   postDistroyedPending = 'http://localhost:5141/api/DistructionPending'; 
   getDistroyedPending = 'http://localhost:5141/api/DistructionPending'; 
   deleteDistroyedPending = 'http://localhost:5141/api/DistructionPending';

   postRecoverPending = 'http://localhost:5141/api/RecoverPending'; 
   getRecoverPending = 'http://localhost:5141/api/RecoverPending'; 
   deleteRecoverPending = 'http://localhost:5141/api/RecoverPending';

  OfficerUrl = 'http://localhost:5141/api/Officer';
  allFirearmUrl = 'http://localhost:5141/api/Firearm/total-firearms';
  markedUrl = 'http://localhost:5141/api/Firearm/count-true-firearms';
  lossUrl = 'http://localhost:5141/api/Loss';
  DeletedUrl = 'http://localhost:5141/api/Firearm';
  CivillianUrl = 'http://localhost:5141/api/Civillian';
  DestroyedUrl = 'http://localhost:5141/api/Destroyed';

  PoagUrl = 'http://localhost:5141/api/Poag';
  IofcUrl = 'http://localhost:5141/api/Iofc';
  HmtsUrl = 'http://localhost:5141/api/Hmts';

  allDestroyedUrl = 'http://localhost:5141/api/Destroyed/total-destroyed';
  allLostUrl = 'http://localhost:5141/api/Loss/total-loss';
  allOfficerUrl = 'http://localhost:5141/api/Officer';

  DeleteOfficerUrl = 'http://localhost:5141/api/Officer';

  userUrl = 'http://localhost:5141/api/User/';   
  private apiUrl = 'http://localhost:5141/api'; 

  //notification 
  notificationUrl = 'http://localhost:5141/api/Notification'; 

 //for the payload 
 private userPayload: any; 

  constructor(
    private http: HttpClient,
    private router: Router,
    private userStore: UserStoreService
  ) {
    this.userPayload = this.decodeToken();
  }

  private user: any; // You can define a user model if needed

  setUser(user: any): void {
    this.user = user;
  }

  getUser(): any {
    return this.user;
  }

  signUp(userObj: any) {
    return this.http.post<any>(
      'http://localhost:5141/api/User/register',
      userObj
    );
  }

  login(loginObj: any) {
    return this.http.post<any>(
      'http://localhost:5141/api/User/authenticate',
      loginObj
    );
  }

  //local storage token
  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  //decoding the token to get payload data
   decodeToken(){ 
    const jwtHelper = new JwtHelperService(); 
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token));
    return jwtHelper.decodeToken(token);
   }  

   getfullNameFromToken(){
   if(this.userPayload)
    return this.userPayload.unique_name;
   } 

   getaccountTypeFromToken(){
    if(this.userPayload)
      return this.userPayload.AccountType;
   }
    
   changePassword(currentPassword: string, newPassword: string): Observable<any> {
    const body = { currentPassword, newPassword };
    return this.http.post<any>('http://localhost:5141/api/User/changePassword', body);
  } 
  
   getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/User/profile`);
  }

  updateUserProfile(profile: UserProfile): Observable<UserProfile> {
    return this.http.put<UserProfile>(`${this.apiUrl}/User/${profile.id}`, profile);
  }

   addOfficer(officer: Officer): Observable<Officer>{
    return this.http.post<Officer>(this.allOfficerUrl, officer);
  }
  
  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
  //read all firearms from the database
  getAllFirearms(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.baseUrl);
  }
  getallFirearmByType(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getFirearmByType);
  }

  getallFirearmBySource(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getFirearmBySource);
  }

  getallDailyLossFirearm(): Observable<Loss[]> {
    return this.http.get<Loss[]>(this.getDailyLossFirearm);
  }

  getallDailyDestroyedFirearm(): Observable<Destroyed[]> {
    return this.http.get<Destroyed[]>(this.getDailyDestroyedFirearm);
  }

  getallDailyReturnedFirearm(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getDailyReturnedFirearm);
  }

  getallDailyRecoveredFirearm(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getDailyRecoveredFirearm);
  }

  getallDailyWithdrawFirearm(): Observable<Withdraw[]> {
    return this.http.get<Withdraw[]>(this.getDailyWithdrawFirearm);
  }

  //weekly graph

  getallWeekllyLossFirearm(): Observable<Loss[]> {
    return this.http.get<Loss[]>(this.getWeeklyLossFirearm);
  }

  getallWeeklyDestroyedFirearm(): Observable<Destroyed[]> {
    return this.http.get<Destroyed[]>(this.getWeeklyDestroyedFirearm);
  }

  getallWeeklyReturnedFirearm(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getWeeklyReturnedFirearm);
  }

  getallWeeklyRecoveredFirearm(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getWeeklyRecoveredFirearm);
  }

  getallweeklyWithdrawFirearm(): Observable<Withdraw[]> {
    return this.http.get<Withdraw[]>(this.getweeklyWithdrawFirearm);
  }

  //Monthly Graph
  getallMonthlyLossFirearm(): Observable<Loss[]> {
    return this.http.get<Loss[]>(this.getMonthlyLossFirearm);
  }

  getallMonthlyDestroyedFirearm(): Observable<Destroyed[]> {
    return this.http.get<Destroyed[]>(this.getMonthlyDestroyedFirearm);
  }

  getallMonthlyReturnedFirearm(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getMonthlyReturnedFirearm);
  }

  getallMonthylRecoveredFirearm(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getMonthlyRecoveredFirearm);
  }

  getallMonthlyWithdrawFirearm(): Observable<Withdraw[]> {
    return this.http.get<Withdraw[]>(this.getMonthlyWithdrawFirearm);
  }

  //Yearly Graph
  getallYearlyLossFirearm(): Observable<Loss[]> {
    return this.http.get<Loss[]>(this.getYearlyLossFirearm);
  }

  getallYearlyDestroyedFirearm(): Observable<Destroyed[]> {
    return this.http.get<Destroyed[]>(this.getYearlyDestroyedFirearm);
  }

  getallYearlyReturnedFirearm(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getYearlyReturnedFirearm);
  }

  getallYearlyRecoveredFirearm(): Observable<Firearm[]> {
    return this.http.get<Firearm[]>(this.getYearlyRecoveredFirearm);
  }

  getallYearlyWithdrawFirearm(): Observable<Withdraw[]> {
    return this.http.get<Withdraw[]>(this.getYearlyWithdrawFirearm);
  }

  //read all officers from the database
  getAllOfficers(): Observable<Officer[]> {
    return this.http.get<Officer[]>(this.OfficerUrl);
  }
  //Total Firearm Review in the dashboard
  getTotalFirearms(): Observable<number> {
    return this.http.get<number>(this.allFirearmUrl);
  }

  getTotalOfficer(): Observable<number> {
    return this.http.get<number>(this.OfficerUrl);
  }

  getTotalDestroyed(): Observable<number> {
    return this.http.get<number>(this.allDestroyedUrl);
  }
  //total marked f irearm
  getTotalMarked(): Observable<number> {
    return this.http.get<number>(this.markedUrl);
  }
  //
  getTotalLost(): Observable<number> {
    return this.http.get<number>(this.allLostUrl);
  }

  addFirearm(firearm: Firearm): Observable<Firearm> {
    return this.http.post<Firearm>(this.baseUrl, firearm);
  }

  //read all lost firearms
  getallLoss(): Observable<Loss[]> {
    return this.http.get<Loss[]>(this.lossUrl);
  }
  //to delete the firearm by id

  getAllCivillian(): Observable<Civillian[]> {
    return this.http.get<Civillian[]>(this.CivillianUrl);
  }

  getAllDestroyed(): Observable<Destroyed[]> {
    return this.http.get<Destroyed[]>(this.DestroyedUrl);
  }

  getAllPoag(): Observable<Poag[]> {
    return this.http.get<Poag[]>(this.PoagUrl);
  }

  getAllIofc(): Observable<Iofc[]> {
    return this.http.get<Iofc[]>(this.IofcUrl);
  }

  getAllHmts(): Observable<Hmts[]> {
    return this.http.get<Hmts[]>(this.HmtsUrl);
  }

  //delete by id
  deleteFirearmById(id: number): Observable<void> {
    const url = `${this.DeletedUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  //delete by officer id
  deleteOfficerById(id: number): Observable<void> {
    const url = `${this.DeleteOfficerUrl}/${id}`;
    return this.http.delete<void>(url); // Pass the 'url' variable here
  } 

  postWithdrawalFirearm(): Observable<Withdraw[]> {
    return this.http.post<Withdraw[]>(this.postwithdrawFirearm, null);
  }

  postFirearmHolder(): Observable<FirearmHolder[]> {
    return this.http.post<FirearmHolder[]>(this.postfirearmHolder, null);
  }

  getFirearcmHolder(): Observable<FirearmHolder[]> {
    return this.http.get<FirearmHolder[]>(this.getfirearmHolder);
  }
  //all Pending Operations  
  //officer pending  

  postallOfficerPending(): Observable<OfficerPending[]> {
    return this.http.post<OfficerPending[]>(this.postOfficerPending, null);
  }

  getallOfficerPending(): Observable<OfficerPending[]> {
    return this.http.get<OfficerPending[]>(this.getOffcierPending);
  }   
  
  deleteOfficerPendingById(id: number): Observable<void> {
    const url = `${this.deleteOfficerPending}/${id}`;
    return this.http.delete<void>(url); // Pass the 'url' variable here
  } 

   // CivillianPending
   getAllCivillianPending(): Observable<CivillianPending[]> {
    return this.http.get<CivillianPending[]>(this.getCivillianPending);
  } 
      
  postAllCivillianPending(): Observable<CivillianPending> {
    return this.http.post<CivillianPending>(this.postCivillianPending, null);
  }
     
  deleteAllCivillianPending(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deleteCivillianPending}/${id}`);
  }

  // PoagPending
  getAllPoagPending(): Observable<PoagPending[]> {
    return this.http.get<PoagPending[]>(this.getPoagPending);
  }

  postAllPoagPending(): Observable<PoagPending[]> {
    return this.http.post<PoagPending[]>(this.postPoagPending, null);
  }
     
  deleteAllPoagPending(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deletePoagPending}/${id}`);
  }

  // IofcPending
  getAllIofcPending(): Observable<IofcPending[]> {
    return this.http.get<IofcPending[]>(this.getIofcPending);
  }

  postAllIofcPending(): Observable<IofcPending[]> {
    return this.http.post<IofcPending[]>(this.postIofcPending, null);
  }

  deleteAllIofcPending(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deleteIofcPending}/${id}`);
  }

  // HmtsPending
  getAllHmtsPending(): Observable<HmtsPending[]> {
    return this.http.get<HmtsPending[]>(this.getHmtsPending);
  }

  postAllHmtsPending(): Observable<HmtsPending[]> {
    return this.http.post<HmtsPending[]>(this.postHmtsPending, null);
  }

  deleteAllHmtsPending(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deleteHmtsPending}/${id}`);
  }

  // LossPending
  getAllLossPending(): Observable<LossPending[]> {
    return this.http.get<LossPending[]>(this.getLossPending);
  }

  postAllLossPending(): Observable<LossPending[]> {
    return this.http.post<LossPending[]>(this.postLossPending, null);
  }

  deleteAllLossPending(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deleteLossPending}/${id}`);
  }

  // DistroyedPending
  getAllDistroyedPending(): Observable<DistrictionPending[]> {
    return this.http.get<DistrictionPending[]>(this.getDistroyedPending);
  }

  postAllDistroyedPending(): Observable<DistrictionPending[]> {
    return this.http.post<DistrictionPending[]>(this.postDistroyedPending, null);
  }

  deleteAllDistroyedPending(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deleteDistroyedPending}/${id}`);
  }

  // RecoverPending
  getAllRecoverPending(): Observable<RecoverPending[]> {
    return this.http.get<RecoverPending[]>(this.getRecoverPending);
  }

  postAllRecoverPending(): Observable<RecoverPending> {
    return this.http.post<RecoverPending>(this.postRecoverPending, null);
  }

  deleteAllRecoverPending(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deleteRecoverPending}/${id}`);
  } 

  //notification  

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.notificationUrl);
  }

  postAllNotification(): Observable<Notification[]> {
    return this.http.post<Notification[]>(this.notificationUrl, null);
  }

  deleteNotification(id: number): Observable<void> {
    return this.http.delete<void>(`${this.notificationUrl}/${id}`);
  }
  
  

}