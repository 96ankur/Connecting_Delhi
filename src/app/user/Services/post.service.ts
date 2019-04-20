import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PostService {

  constructor(private _http:HttpClient) { }

  post(){
    return this._http.post('/user/dispComplaints',{},{
                           headers:new HttpHeaders({
                            "Content-Type":"application/json",
                            "x-auth-token":sessionStorage.getItem("x-auth-token")
                          }),
                           responseType: 'text',
                           observe: 'response'})
                      .pipe(catchError(this.errorHandler));
  }

  sort(data){
    return this._http.post('/user/sorting',data,{
                        headers:new HttpHeaders({
                          "Content-Type":"application/json",
                          "x-auth-token":sessionStorage.getItem("x-auth-token")
                        }),
                        responseType: 'text',
                        observe: 'response'})
                      .pipe(catchError(this.errorHandler))

  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error || "Error")
  }
}
