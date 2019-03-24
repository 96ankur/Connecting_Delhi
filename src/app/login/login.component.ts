import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  flag=false;
  hide=true;
  
  
  userLoginForm:FormGroup;

  constructor( private fb: FormBuilder, private route:Router, private loginService:LoginService) {
   }


  ngOnInit() {
    this.createForms();

  }

  
  createForms() {

   this.userLoginForm=this.fb.group({
    email:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
    password:['',Validators.compose([Validators.required, ])],        

  })

  }
 
  onSubmitUserLoginForm(value){
   this.loginService.login(value).subscribe((res:any)=>{
    if(res.success){
      sessionStorage.setItem('tkn',res.token)
      this.route.navigate(['user'])
    }else{
      window.alert(res.msg)
    }
   })
  }
}