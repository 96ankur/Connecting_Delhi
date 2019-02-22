import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
   COMPONENTS INSIDE USER MODULE
*/
import { PostsComponent } from './posts/posts.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyComplaintsComponent } from './my-complaints/my-complaints.component';
import { RegisterComplaintsComponent } from './register-complaints/register-complaints.component';

/*
   ROUTING INSIDE USER MODULE
*/

const routes: Routes = [
  {
    path:'',
    redirectTo:'posts',
    pathMatch:'full'
  
  },
  {
    path:'posts',
    component:PostsComponent,    
  },
  {
    path:'registerComplaints',
    component:RegisterComplaintsComponent
  },
  {
    path:'myComplaints',
    component:MyComplaintsComponent
  },
  {
    path:'changePassword',
    component:ChangePasswordComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

export const userRoutingComponents=[
                                    PostsComponent,
                                    ChangePasswordComponent,
                                    MyComplaintsComponent,
                                    RegisterComplaintsComponent 
                                  ]
