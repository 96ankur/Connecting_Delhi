import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ComplaintsCountService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "client-token":sessionStorage.getItem("tkn")
  })

  count(corporation){
    return this._http.post('http://localhost:5000/user/complaintsCount',{
      m_corporation:corporation
    },{headers:this.header})
  }
}
