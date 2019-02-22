import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MyComplaintsService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "client-token":sessionStorage.getItem("tkn")
  })
  
  myComplaints(){
    console.log(this.header);
    return this._http.get('http://localhost:5000/user/myComplaints',{headers:this.header})
  }
}
