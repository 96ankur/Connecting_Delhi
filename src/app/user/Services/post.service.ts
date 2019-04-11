import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "x-auth-token":sessionStorage.getItem("x-auth-token")
  })

  post(){
    return this._http.post('/user/dispComplaints',{},{
                           headers:this.header,
                           responseType: 'text',
                           observe: 'response'
                          });
  }
}
