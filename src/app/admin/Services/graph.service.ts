import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GraphService {

  constructor(private _http:HttpClient) { }

  graph(corporation){
    return this._http.post('/admin/complaintsGraph',{
      corpId:corporation
    },{headers:new HttpHeaders({
      "Content-Type":"application/json",
      "x-auth-token":sessionStorage.getItem("x-auth-token")
    }), responseType: 'text',observe: 'response'})
  }
}
