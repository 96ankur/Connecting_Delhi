import { Component, OnInit } from "@angular/core";
import { PostService } from "../Services/post.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  public complaints;
  public count: Object = {};
  public userName:String = "";
  public token;

  constructor(private PostService: PostService, private route: Router) {
    this.token = sessionStorage.getItem("x-auth-token");
    if (
      this.token == "" ||
      !this.token ||
      this.token == undefined ||
      this.token == null
    ) {
      window.alert("YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN");
      this.route.navigate(["home"]);
    }
  }

  ngOnInit() {
    this.PostService.post().subscribe((res: any) => {
      if (res.status == 200) {
        let data = JSON.parse(res.body)
        this.complaints = data.filteredComplaints;
        this.count = data.count;
        this.userName = data.userName;
      } else {
        window.alert("Complaint not registered");
      }
    },errorObj =>{
       window.alert(errorObj.error);
     });
  }

  sorting(data){
    this.PostService.sort(data).subscribe((res:any)=>{
      if (res.status == 200) {
        this.complaints = JSON.parse(res.body);
      } else {
        window.alert("Complaint not registered");
      }
    },errorObj =>{
       window.alert(errorObj.error);
     })
  }

  logout() {
    sessionStorage.removeItem("x-auth-token");
    this.route.navigate(["home"]);
  }
}
