import { Component, OnInit } from '@angular/core';
import { ComplaintsCountService } from '../Services/complaints-count.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delhi-cantonment-board',
  templateUrl: './delhi-cantonment-board.component.html',
  styleUrls: ['./delhi-cantonment-board.component.scss']
})
export class DelhiCantonmentBoardComponent implements OnInit {

  public complaintsCount={};
  public token;

  constructor(private complaintsCountService:ComplaintsCountService,private router:Router) {
    this.token=sessionStorage.getItem('x-auth-token')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
        window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
        (this.router.navigate(['home']))
    }
   }

  ngOnInit() {
    this.complaintsCountService.count('DBC').subscribe((res:any)=>{
        if(res.status == 200){
            this.complaintsCount=JSON.parse(res.body)
        }else{
            window.alert(res.body)
        }
    })
}
logout(){
    sessionStorage.removeItem('x-auth-token')
    this.router.navigate(['home'])
  }

}
