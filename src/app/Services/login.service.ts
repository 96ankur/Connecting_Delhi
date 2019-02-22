import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private _http:HttpClient) { }

  login(value){
    return this._http.post('http://localhost:5000/user/loginUser',{
      userEmail:value.email,
      userPassword:value.password,
    })
  }
}
