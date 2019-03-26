import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MyComplaintsService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "x-auth-token":sessionStorage.getItem("x-auth-token")
  })
  
  myComplaints(){
    return this._http.post('http://localhost:5000/user/dispComplaints',{type:'personal'},{
                            headers:this.header,
                            responseType: 'text',
                            observe: 'response'
                          })
  }
}
