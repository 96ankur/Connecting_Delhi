import { Component, OnInit } from '@angular/core';
import { AdminChangePasswordService } from '../Services/admin-change-password.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.scss']
})
export class AdminChangePasswordComponent implements OnInit {
  loading: boolean = false;
  ChangePasswordForm:FormGroup;
  public token;

  constructor(private fb: FormBuilder,private ChangePasswordService:AdminChangePasswordService, private route:Router) {
     this.token=sessionStorage.getItem('x-auth-token')
     if(this.token==""||!this.token||this.token==undefined||this.token==null){
       window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
       (this.route.navigate(['home']))
       }
}

  ngOnInit() {
    this.createForms();
  }

  createForms(){
    this.ChangePasswordForm = this.fb.group({
      oldPassword:['',Validators.compose([Validators.required,]) ],
      newPassword:['',Validators.compose([Validators.required,]) ],
      confirmPassword:['',Validators.compose([Validators.required,]) ],
    })
  }
    
  onSubmitChangePasswordForm(value){
    this.loading = true;
    this.ChangePasswordService.changePassword(value).subscribe((res:any)=>{
      if(res.status == 200){
        this.loading = false;
        window.alert(res.body);
        this.route.navigate(['admin/dashboard']);
      }else{
        this.loading = false;
        window.alert(res.msg);
      }
    },errObj =>{
      this.loading = false;
      window.alert(errObj.error);
    })
   }
  
  logout(){
    sessionStorage.removeItem('x-auth-token')
    this.route.navigate(['home'])
  }
}
