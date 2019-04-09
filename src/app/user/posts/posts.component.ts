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
        this.complaints = JSON.parse(res.body);
      } else {
        window.alert("No complaint registered");
      }
    });
  }

  logout() {
    sessionStorage.removeItem("x-auth-token");
    this.route.navigate(["home"]);
  }
}
