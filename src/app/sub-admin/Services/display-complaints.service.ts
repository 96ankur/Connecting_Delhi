import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DisplayComplaintsService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "client-token":sessionStorage.getItem("tkn")
  })
  
  complaints(category){
    return this._http.post('http://localhost:5000/user/dispCompByCategory',{
      category:category
    },{
      headers:this.header
    })
  }
}
