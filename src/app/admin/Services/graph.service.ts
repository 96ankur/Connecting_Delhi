import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GraphService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "client-token":sessionStorage.getItem("tkn")
  })

  graph(corporation){
    return this._http.post('http://localhost:5000/user/complaintsGraph',{
      m_corporation:corporation
    },{headers:this.header})
  }
}
