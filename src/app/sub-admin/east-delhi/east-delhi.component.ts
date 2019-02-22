import { Component, OnInit } from '@angular/core';
import { ComplaintsCountService } from '../Services/complaints-count.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-east-delhi',
  templateUrl: './east-delhi.component.html',
  styleUrls: ['./east-delhi.component.scss']
})
export class EastDelhiComponent implements OnInit {

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
        this.complaintsCountService.count('EDMC').subscribe((res:any)=>{
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
