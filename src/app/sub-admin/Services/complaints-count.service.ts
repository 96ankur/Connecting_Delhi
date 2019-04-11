import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ComplaintsCountService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "x-auth-token":sessionStorage.getItem("x-auth-token")
  })

  count(corporation){
    return this._http.post('/admin/complaintsCount',{
      corp_id:corporation
    },{headers:this.header, responseType: 'text',observe: 'response'})
  }
}
