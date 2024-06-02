import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from "@angular/router";
import { Observable } from "rxjs";
import { FirearmService } from "../services/firearm.service";
import { Toast } from "ngx-toastr";
import { NgToastService } from "ng-angular-popup";

@Injectable({
  providedIn: 'root'
})  
export class AuthGuard implements CanActivate { 
  constructor(private firearmService: FirearmService, 
    private router: Router, 
    private toast: NgToastService
  ){

  }

  canActivate(): boolean {
    if(this.firearmService.isLoggedIn()){
    return true; // Replace with your authentication logic
       
    }else {  
       
      this.toast.error({detail: "ERROR", summary:'Please Login first!', duration: 8000});

      this.router.navigate(['/login']);

      return false; 
    }

  }  


}