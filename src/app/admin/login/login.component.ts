import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AdminLoginService } from '../Services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean=true;
  loading: boolean = false;
  adminLoginForm:FormGroup;

  constructor(private fb: FormBuilder,
              private AdminLoginService:AdminLoginService, private route:Router) { }

  ngOnInit() {
    this.createForms();

  }

  createForms() {

    this.adminLoginForm=this.fb.group({
      email:['', Validators.compose([Validators.required,])],
      password:['',Validators.compose([Validators.required, ])],     
 
   })
  } 
  
  onSubmitAdminLoginForm(value){
    this.loading = true;
    this.AdminLoginService.login(value).subscribe((res:any)=>{
      if(res.status == 200){
        this.loading = false;
        sessionStorage.setItem('x-auth-token',res.body)
        this.route.navigate(['admin/dashboard'])
      }else{
        this.loading = false;
        window.alert(res.msg)
      }
    },error =>{
      this.loading = false;
      window.alert('Invalid email or password.');
    })
   }
}
