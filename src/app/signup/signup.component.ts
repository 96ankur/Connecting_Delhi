import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {SignupService} from '../Services/signup.service';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  flag: boolean=false;
  hide: boolean=true;
  
  loading: boolean = false;

  userSignupForm: FormGroup;
  userSignupOTPForm:FormGroup;
  constructor(private fb: FormBuilder, private route:Router,private SignupService:SignupService) { }

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
    this.loading = true;
    this.SignupService.signup(value).subscribe((res:any)=>{
      if(res.status == 200){
        this.loading = false;
        window.alert(res.body);
        sessionStorage.setItem('x-auth-token',res.headers.get('x-auth-token'))
        this.flag=true;
      }else{
        this.loading = false;
        window.alert(res.body)
      }
    },errorObj =>{
      this.loading = false;
      window.alert(errorObj.error);
    })
  }
  onSubmitUserSignupOTPForm(value){
    this.loading = false;
    this.SignupService.otpVerify(value).subscribe((res:any)=>{
      
      if(res.status == 200){
        this.loading = false;
        window.alert(res.body);
        this.route.navigate(['user'])
      }else{
        this.loading = false;
        window.alert('Data Not found. Please request for OTP again')
      }
    },errorObj =>{
      window.alert(errorObj.error);
    })
  }

  resendOtp(){
    this.SignupService.resendOTP().subscribe((res:any)=>{
      if(res.status == 200){
        window.alert(res.body);
      }
    },errorObj =>{
      window.alert(errorObj.error);
    })
  }
}
