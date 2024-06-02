// src/app/core/interceptors/token.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { FirearmService } from 'src/app/Core/services/firearm.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor( private router: Router,
    private firearmService: FirearmService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.firearmService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.firearmService.signOut();
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}