import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChangePasswordService {

  constructor(private _http:HttpClient) { }

  changePassword(value){
    return this._http.post('/user/forgetPasswordUrl',{
      email:value.email,
      newPassword:value.newPassword,
      confirmPassword:value.confirmPassword
    })
  }
}
