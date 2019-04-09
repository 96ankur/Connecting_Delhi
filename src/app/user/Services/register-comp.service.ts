import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class RegisterCompService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    // "Content-Type":"multipart/form-data",
    "x-auth-token":sessionStorage.getItem("x-auth-token")
  })

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
    return this._http.post('http://localhost:5000/user/registerComplaints',fd,{
                            headers:this.header,
                            responseType: 'text',
                            observe: 'response'
                          })
  }

}
