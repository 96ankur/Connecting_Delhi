import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  hideElement = false;
  public token;

  
constructor(private router: Router) {
  this.token=sessionStorage.getItem('x-auth-token')
                if(this.token==""||!this.token||this.token==undefined||this.token==null){
                  window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
                  (this.router.navigate(['home']))
                  }
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      if (event.url === '/dashboard') {
        this.hideElement = true;
      }  else {
        this.hideElement = false;
      }
    }
  });
}
  ngOnInit() {
  }

  logout(){
    sessionStorage.removeItem('x-auth-token')
    this.router.navigate(['home'])
  }

}
