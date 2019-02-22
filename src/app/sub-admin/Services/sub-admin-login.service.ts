import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SubAdminLoginService {

  constructor(private _http:HttpClient) { }

  login(value){
    return this._http.post('http://localhost:5000/user/loginSub_admin',{
      corporation:value.Corporation,
      sub_adminPassword:value.password
    })
  }
}
