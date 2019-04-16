import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {ForgotPasswordService} from '../Services/forgot-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  userForgotPasswordForm:FormGroup;
  constructor(private fb: FormBuilder,
              private ForgotPasswordService:ForgotPasswordService,private route:Router) { }
  
  ngOnInit() {
    this.createForms();
  }

  
  createForms() {

   this.userForgotPasswordForm=this.fb.group({
    email:['', Validators.compose([Validators.required,])],
  
  })

  }
 
  onSubmitUserForgotPasswordForm(value){
   this.ForgotPasswordService.forgotPassword(value).subscribe((res:any)=>{
     if(res.status == 200){
       window.alert(res.body);
       this.route.navigate(['home'])
     }
   },errorObj =>{
    // this.loading = false;
     window.alert(errorObj.error);
   })
  }
  
}
