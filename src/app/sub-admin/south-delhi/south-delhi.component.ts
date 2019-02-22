import { Component, OnInit } from '@angular/core';
import { ComplaintsCountService } from '../Services/complaints-count.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-south-delhi',
  templateUrl: './south-delhi.component.html',
  styleUrls: ['./south-delhi.component.scss']
})
export class SouthDelhiComponent implements OnInit {

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
        this.complaintsCountService.count('SDMC').subscribe((res:any)=>{
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
