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
  flag: boolean=false;
  hide: boolean=true;
  
  loading: boolean = false;
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
    this.loading = true;
   this.loginService.login(value).subscribe((res:any)=>{
      if(res.status == 200){
        this.loading = false;
        sessionStorage.setItem('x-auth-token',res.body)
        this.route.navigate(['user'])
      }
   },errorObj =>{
    this.loading = false;
     window.alert(errorObj.error);
   })
  }
}