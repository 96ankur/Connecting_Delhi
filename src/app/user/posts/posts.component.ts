import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public complaints;
  public token;

  constructor(private PostService:PostService,private route:Router) { 
    this.token=sessionStorage.getItem('tkn')
                if(this.token==""||!this.token||this.token==undefined||this.token==null){
                  window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
                  (this.route.navigate(['home']))
                  }
  }

  ngOnInit() {
    this.PostService.post().subscribe((res:any)=>{
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
