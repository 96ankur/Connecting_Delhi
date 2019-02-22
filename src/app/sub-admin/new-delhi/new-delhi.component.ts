import { Component, OnInit } from '@angular/core';
import { ComplaintsCountService } from '../Services/complaints-count.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-delhi',
  templateUrl: './new-delhi.component.html',
  styleUrls: ['./new-delhi.component.scss']
})
export class NewDelhiComponent implements OnInit {

  public complaintsCount=[];

  public token;

  constructor(private complaintsCountService:ComplaintsCountService,private router:Router) {
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
        window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
        (this.router.navigate(['home']))
    }
}

  ngOnInit() {
    this.complaintsCountService.count('NewDMC').subscribe((res:any)=>{
        if(res.success){
            this.complaintsCount=res.count
        }else{
            window.alert(res.msg)
        }
    })
}
    logout(){
        sessionStorage.removeItem('tkn')
        this.router.navigate(['home'])
    }
}
