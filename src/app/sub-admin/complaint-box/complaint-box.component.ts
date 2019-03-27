import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router  } from '@angular/router';
import { DisplayComplaintsService } from '../Services/display-complaints.service';
import { SortingService } from '../Services/sorting.service';
import { StatusChangeService } from '../Services/status-change.service';

@Component({
  selector: 'app-complaint-box',
  templateUrl: './complaint-box.component.html',
  styleUrls: ['./complaint-box.component.scss']
})
export class ComplaintBoxComponent implements OnInit {

  public complaints=[];
  public category;
  public token;
  constructor(private route:ActivatedRoute,private router:Router,
              private DisplayComplaintsService:DisplayComplaintsService,private Sorting:SortingService,
              private StatusChangeService:StatusChangeService) {
    this.token=sessionStorage.getItem('x-auth-token')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
        window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
        (this.router.navigate(['home']))
    }
  }


  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.category=params.get('category');

      this.DisplayComplaintsService.complaints(this.category).subscribe((res:any)=>{
        if(res.status == 200){
          this.complaints=JSON.parse(res.body);
        }else{
          window.alert('Complaints not found');
        }
      },error =>{
        window.alert('Something went wrong. Please Login again');
      })
    });
  }

  sorting(status){
    this.Sorting.sort({status:status,category:this.category}).subscribe((res:any)=>{
      if(res.status == 200){
        this.complaints=JSON.parse(res.body);
      }else{
        window.alert('Complaints not found');
      }
    })
  }

  statusChange(id){
    this.StatusChangeService.updateStatus(id).subscribe((res:any)=>{
      if(res.status == 200){
        window.alert(res.body)
      }else{
        window.alert('Something went wrong');
      }
    })
  }

  logout(){
    sessionStorage.removeItem('x-auth-token')
    this.router.navigate(['home'])
  }

}
