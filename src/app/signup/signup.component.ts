import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {SignupService} from '../Services/signup.service';
import {OtpService} from '../Services/otp.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  flag=false;
  hide=true;
  userSignupForm: FormGroup;
  userSignupOTPForm:FormGroup;
  constructor(private fb: FormBuilder, private route:Router,private SignupService:SignupService, private OtpService:OtpService) { }

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    this.userSignupForm = this.fb.group({
      userName:['', Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$') ])],
      phone:['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[789][0-9]*$') ])],
      email:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password:['',Validators.compose([Validators.required, ])],        
      aadharNo:['', Validators.compose([Validators.required,Validators.minLength(12),Validators.maxLength(12),Validators.pattern('^[0-9]*$')  ])],   
    })

   this.userSignupOTPForm=this.fb.group({
    otp:['', Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(5),Validators.pattern('^[0-9]*$')  ])],    
  })
  }

  onSubmitUserSignupForm(value){
    this.SignupService.signup(value).subscribe((res:any)=>{
      if(res.success){
        window.alert(res.msg);
        sessionStorage.setItem('tkn',res.token)
        this.flag=true;
      }else{
        window.alert(res.msg)
      }
    })
  }
  onSubmitUserSignupOTPForm(value){
    this.OtpService.otpVerify(value).subscribe((res:any)=>{
      if(res.success){
        window.alert(res.msg);
        sessionStorage.setItem('tkn',res.token)
        this.route.navigate(['user'])
      }else{
        window.alert(res.msg)
      }
    })
  }

}