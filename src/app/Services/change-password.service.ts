import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ChangePasswordService {

  constructor(private _http:HttpClient) { }

  changePassword(value){
    return this._http.post('/user/forgetPasswordUrl',{
                        email:value.email,
                        newPassword:value.newPassword
                      },{responseType: 'text',observe: 'response'})
                      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error || "Error")
  }
}
