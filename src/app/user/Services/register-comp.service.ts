import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class RegisterCompService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    // "Content-Type":"multipart/form-data",
    "client-token":sessionStorage.getItem("tkn")
  })

  registerComplaints(value){
    let data={
                description:value.description,
                m_corporation:value.handleBy,
                category:value.category,
                location:value.area
              }
    const fd=new FormData();
    fd.append('data',JSON.stringify(data))
    fd.append('Image',value.selectedFile,value.selectedFile.name);
    return this._http.post('http://localhost:5000/user/registerComplaints',fd,{headers:this.header})
  }

}
