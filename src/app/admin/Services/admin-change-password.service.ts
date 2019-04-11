import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminChangePasswordService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "x-auth-token":sessionStorage.getItem("x-auth-token")
  })

  changePassword(value){
    return this._http.post('/admin/changeAdminPassword',{
      oldPassword:value.oldPassword,
      newPassword:value.newPassword,
    },{headers:this.header,responseType: 'text',observe: 'response'})
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error|| "Error")
  }
}
