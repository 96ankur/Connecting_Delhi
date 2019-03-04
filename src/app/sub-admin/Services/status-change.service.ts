import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusChangeService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "client-token":sessionStorage.getItem("tkn")
  })

  updateStatus(id){
    return this._http.post('http://localhost:5000/user/statusUpdate',
    {id:id},
    {headers:this.header})
  }
}