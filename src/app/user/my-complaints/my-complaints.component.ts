import { Component, OnInit } from '@angular/core';
import { MyComplaintsService } from '../Services/my-complaints.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-complaints',
  templateUrl: './my-complaints.component.html',
  styleUrls: ['./my-complaints.component.scss']
})
export class MyComplaintsComponent implements OnInit {

  public complaints
  public token

  constructor(private MyComplaintsService:MyComplaintsService,private route:Router) {
    this.token=sessionStorage.getItem('tkn')
                if(this.token==""||!this.token||this.token==undefined||this.token==null){
                  window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
                  (this.route.navigate(['home']))
                  }
   }

  ngOnInit() {
    this.MyComplaintsService.myComplaints().subscribe((res:any)=>{
      if(res.success){
        this.complaints=res.complaints;
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
