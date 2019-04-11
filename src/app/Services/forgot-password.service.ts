import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ForgotPasswordService {

  constructor(private _http:HttpClient) { }

  forgotPassword(value){
    return this._http.post('/user/forgetPasswordMail',{
      email:value.email
    })
  }
}
