import { Component, OnInit } from '@angular/core';
import { AdminChangePasswordService } from '../Services/admin-change-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.scss']
})
export class AdminChangePasswordComponent implements OnInit {

  public token;

  constructor(private ChangePasswordService:AdminChangePasswordService, private route:Router) {
     this.token=sessionStorage.getItem('x-auth-token')
     if(this.token==""||!this.token||this.token==undefined||this.token==null){
       window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
       (this.route.navigate(['home']))
       }
}

  ngOnInit() {
  }

  onSubmitChangePasswordForm(value){
    this.ChangePasswordService.changePassword(value).subscribe((res:any)=>{
      if(res.status == 200){
        window.alert(res.body);
        this.route.navigate(['user']);
      }else{
        window.alert(res.msg);
      }
    },error =>{
      window.alert('Invalid details');
    })
  }
  
  logout(){
    sessionStorage.removeItem('x-auth-token')
    this.route.navigate(['home'])
  }
}
