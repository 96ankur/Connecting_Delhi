import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {

  constructor(private _http:HttpClient) { }

  signup(value){
    return this._http.post('http://localhost:5000/user/signupUser',{
      userName:value.userName,
      userPhone:value.phone,
      userEmail:value.email,
      userPassword:value.password,
      userAadhar:value.aadharNo
    })
  }

}
