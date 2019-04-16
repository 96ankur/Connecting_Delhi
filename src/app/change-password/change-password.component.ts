import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ChangePasswordService } from '../Services/change-password.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  public email;
  public hide: Boolean = false;

  homeChangePasswordForm:FormGroup;
  constructor( private fb: FormBuilder,
               private ChangePasswordService:ChangePasswordService,private route:ActivatedRoute,
               private router:Router) {
  }


  ngOnInit() {
    this.createForms();
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.email=params.get('e')
    })
 
  }

 createForms(){
  this.homeChangePasswordForm = this.fb.group({
    newPassword:['',Validators.compose([Validators.required,]) ],
    confirmPassword:['',Validators.compose([Validators.required,]) ],

  })
 }

  onSubmitHomeChangePasswordForm(value){
    value.email=atob(this.email);
   this.ChangePasswordService.changePassword(value).subscribe((res:any)=>{
     if(res.status == 200){
       window.alert(res.body);
     }
   },errorObj =>{
     window.alert(errorObj.error);
   })
  }
}