import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class SubAdminLoginService {

  constructor(private _http:HttpClient) { }

  login(value){
    return this._http.post('/mc/mcLogin',{
                            corporationId:value.Corporation,
                            corporationPassword:value.password
                          },{
                            responseType: 'text',
                            observe: 'response'
                          })
                      .pipe(catchError(this.errorHandler)); 
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Error")
  }
}
