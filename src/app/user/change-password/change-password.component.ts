import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ChangePasswordService } from '../Services/change-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  ChangePasswordForm:FormGroup;
  public token;
  constructor( private fb: FormBuilder,
               private ChangePasswordService:ChangePasswordService, private route:Router) {
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
  this.ChangePasswordService.changePassword(value).subscribe((res:any)=>{
    if(res.status == 200){
      window.alert(res.body);
      this.route.navigate(['user']);
    }else{
      window.alert(res.body);
    }
  })
}

logout(){
  sessionStorage.removeItem('x-auth-token')
  this.route.navigate(['home'])
}
}