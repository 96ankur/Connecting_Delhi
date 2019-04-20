import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusChangeService {

  constructor(private _http:HttpClient) { }

  updateStatus(id){
    return this._http.post('/mc/statusUpdate',
    {id:id},
    {headers:new HttpHeaders({
      "Content-Type":"application/json",
      "x-auth-token":sessionStorage.getItem("x-auth-token")
    }),responseType: 'text',observe: 'response'})
  }
}
