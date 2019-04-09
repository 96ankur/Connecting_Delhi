import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class DisplayComplaintsService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "x-auth-token":sessionStorage.getItem("x-auth-token")
  })
  
  complaints(category){
    return this._http.post('http://localhost:5000/mc/dispCompByCategory',{
                          category:category},{
                          headers:this.header,
                          responseType: 'text',
                          observe: 'response'
                        })
                        .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Error")
  }
}
