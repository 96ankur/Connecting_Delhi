import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class RegisterCompService {

  constructor(private _http:HttpClient) { }

  registerComplaints(value){
    let data={
                description:value.description,
                corp_id:value.handleBy,
                category:value.category,
                location:value.area
              }
    const fd=new FormData();
    fd.append('data',JSON.stringify(data))
    fd.append('image',value.selectedFile,value.selectedFile.name);
    return this._http.post('/user/registerComplaints',fd,{
                            headers:new HttpHeaders({
                              // "Content-Type":"multipart/form-data",
                              "x-auth-token":sessionStorage.getItem("x-auth-token")
                            }),
                            responseType: 'text',
                            observe: 'response'
                          })
  }

}
