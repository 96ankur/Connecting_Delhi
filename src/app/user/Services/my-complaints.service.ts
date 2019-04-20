import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MyComplaintsService {

  constructor(private _http:HttpClient) { }

  myComplaints(){
    return this._http.post('/user/dispComplaints',{type:'personal'},{
                            headers:new HttpHeaders({
                              "Content-Type":"application/json",
                              "x-auth-token":sessionStorage.getItem("x-auth-token")
                            }),
                            responseType: 'text',
                            observe: 'response'
                          })
  }
}
