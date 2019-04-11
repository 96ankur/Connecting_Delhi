import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusChangeService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "x-auth-token":sessionStorage.getItem("x-auth-token")
  })

  updateStatus(id){
    return this._http.post('/mc/statusUpdate',
    {id:id},
    {headers:this.header,responseType: 'text',observe: 'response'})
  }
}
