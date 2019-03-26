import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChangePasswordService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "x-auth-token":sessionStorage.getItem("x-auth-token")
  })

  changePassword(value){
    return this._http.post('http://localhost:5000/user/changeUserPassword',{
      oldPassword:value.oldPassword,
      newPassword:value.newPassword,
    },{
      headers:this.header,
      responseType: 'text',
      observe: 'response'})
  }
}
