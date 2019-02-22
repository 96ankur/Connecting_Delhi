import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SortingService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "client-token":sessionStorage.getItem("tkn")
  })

  sort(value){
    return this._http.post('http://localhost:5000/user/sorting',
    {status:value.status,
     category:value.category},
    {headers:this.header})
  }
}
