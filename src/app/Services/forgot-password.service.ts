import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ForgotPasswordService {

  constructor(private _http:HttpClient) { }

  forgotPassword(value){
    return this._http.post('/user/forgetPasswordMail',
                            {email:value.email},
                            {responseType: 'text',observe: 'response'})
                     .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error || "Error")
  }
}
