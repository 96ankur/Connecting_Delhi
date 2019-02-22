import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "client-token":sessionStorage.getItem("tkn")
  })

  post(){
    return this._http.get('http://localhost:5000/user/allComplaints',{headers:this.header});
  }
}
