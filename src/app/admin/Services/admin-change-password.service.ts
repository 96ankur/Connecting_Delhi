import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminChangePasswordService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "client-token":sessionStorage.getItem("tkn")
  })

  changePassword(value){
    return this._http.post('http://localhost:5000/user/changeUserPassword',{
      oldPassword:value.oldPassword,
      newPassword:value.newPassword,
      confirmPassword:value.confirmPassword
    },{headers:this.header})
  }
}
