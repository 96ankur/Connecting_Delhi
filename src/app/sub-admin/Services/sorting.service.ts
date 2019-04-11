import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SortingService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "x-auth-token":sessionStorage.getItem("x-auth-token")
  })

  sort(value){
    return this._http.post('/mc/sorting',
    {status:value.status,
     category:value.category},
    {headers:this.header,responseType: 'text',observe: 'response'})
  }
}
