import { Component, OnInit } from '@angular/core';
import { AdminChangePasswordService } from '../Services/admin-change-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.scss']
})
export class AdminChangePasswordComponent implements OnInit {

  public token

  constructor(private ChangePasswordService:AdminChangePasswordService, private route:Router) {
     this.token=sessionStorage.getItem('tkn')
     if(this.token==""||!this.token||this.token==undefined||this.token==null){
       window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
       (this.route.navigate(['home']))
       }
}

  ngOnInit() {
  }

  onSubmitChangePasswordForm(value){
    this.ChangePasswordService.changePassword(value).subscribe((res:any)=>{
      if(res.success){
        window.alert(res.msg);
        this.route.navigate(['user']);
      }else{
        window.alert(res.msg);
      }
    })
  }
  
  logout(){
    sessionStorage.removeItem('tkn')
    this.route.navigate(['home'])
  }

}