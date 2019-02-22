import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  hideElement = false;
  
  
constructor(private router: Router) {
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

}
