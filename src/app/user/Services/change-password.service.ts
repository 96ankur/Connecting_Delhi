import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChangePasswordService {

  constructor(private _http:HttpClient) { }

  changePassword(value){
    return this._http.post('/user/changeUserPassword',{
      oldPassword:value.oldPassword,
      newPassword:value.newPassword,
    },{
      headers:new HttpHeaders({
        "Content-Type":"application/json",
        "x-auth-token":sessionStorage.getItem("x-auth-token")
      }),
      responseType: 'text',
      observe: 'response'})
  }
}
