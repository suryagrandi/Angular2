import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import {catchError}  from 'rxjs/operators'
import { RegistrationPageComponent } from './registration-page/registration-page.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  post(c){
    debugger;
    return  this.http.post('https://localhost:44319/api/Mail/Login',c)
    .pipe(catchError(this.errorHandler))
   }
  
   forgotpassword(c){
      return  this.http.post('https://localhost:44319/api/Mail/ForgotPassword',c)
      .pipe(catchError(this.errorHandler))
     }

     reset(c){
       debugger;
      return  this.http.post('https://localhost:44319/api/Mail/ResetPassword',c)
      .pipe(catchError(this.errorHandler))
     }
     registration(c){
      return  this.http.post('https://localhost:44319/api/Mail/postuser',c)
      .pipe(catchError(this.errorHandler))
     }
     ActivateAccount(c){
       debugger;
      return  this.http.post('https://localhost:44319/api/Mail/ActivateAccount',c)
      .pipe(catchError(this.errorHandler))
     }
     AccountVerify(c){
      debugger;
     return  this.http.post('https://localhost:44319/api/Mail/AccountVerify',c)
     .pipe(catchError(this.errorHandler))
    }

   errorHandler(error:HttpErrorResponse){
        return throwError(error);
   }

}
