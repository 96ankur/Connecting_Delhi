import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsCountService {

  constructor(private _http:HttpClient) { }

  count(corporation){
    return this._http.post('/admin/complaintsCount',{
      corp_id:corporation
    },{headers:new HttpHeaders({
      "Content-Type":"application/json",
      "x-auth-token":sessionStorage.getItem("x-auth-token")
    }),responseType: 'text',observe: 'response'})
  }
}
