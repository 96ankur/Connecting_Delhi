import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Corp} from './CorpInterface';
import { SubAdminLoginService } from '../Services/sub-admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public selCorp="";
 hide=true;
  userLoginForm:FormGroup;
  agencies:Corp[]= [
    {value:'NDMC', viewValue: 'North Delhi Mun. Corp.'},
    {value: 'SDMC', viewValue: 'South Delhi Mun. Corp.'},
    {value: 'EDMC', viewValue: 'East Delhi Mun. Corp.'},
    {value: 'DCB', viewValue: 'Delhi Cantonment Board'},
    {value: 'NewDMC', viewValue: 'New Delhi Mun. Corp.'},

  ];

  constructor( private fb: FormBuilder, private route:Router, private SubAdminLoginService:SubAdminLoginService) {
   }


  ngOnInit() {
    this.createForms();

  }

  
  createForms() {

   this.userLoginForm=this.fb.group({
    Corporation:['', Validators.compose([Validators.required,])],
    password:['',Validators.compose([Validators.required,]) ]
    
  })

  }
 
  onSubmitUserLoginForm(value){
    switch(value.Corporation){
      case "NDMC" : 
                    this.selCorp="northDelhiMunicipalCorporation";
                    break;
      case "NewDMC" : 
                    this.selCorp="newDelhiMunicipalCorporation";
                    break;
      case "EDMC" : 
                    this.selCorp="eastDelhiMunicipalCorporation";
                    break;
      case "SDMC" : 
                    this.selCorp="southDelhiMunicipalCorporation";
                    break;
      case "DCB" : 
                    this.selCorp="delhiCantonmentBoard";
                    break;
                    
    } 
    this.SubAdminLoginService.login(value).subscribe((res:any)=>{
      if(res.success){
        sessionStorage.setItem('tkn',res.token)
        this.route.navigate(['subAdmin/'+this.selCorp])
      }else{
        window.alert(res.msg)
      }
    })
  }
}
