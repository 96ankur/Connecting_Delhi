import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
   COMPONENTS INSIDE ROOT MODULE
*/
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
     {
       path:'',
       redirectTo:'home',
       pathMatch:"full"
     },
     {
       path:'home',
       component:HomeComponent
     },
     {
       path:'user',
       loadChildren:'./user/user.module#UserModule'
     },
     {
      path:'admin',
      loadChildren:'./admin/admin.module#AdminModule'
     },
     {
      path:'subAdmin',
      loadChildren:'./sub-admin/sub-admin.module#SubAdminModule'
     },
     {
       path:'login',
       component:LoginComponent,
     },
     {
       path:'signup',
       component:SignupComponent,
     }, 
     {
       path:'forgotPassword',
       component:ForgotPasswordComponent
     },
     {
       path:'changePassword/:e',
       component:ChangePasswordComponent,
     },
     {
       path:'**',
       redirectTo:'error404',
       pathMatch:"full"
     },
     {
       path:'error404',
       component:PagenotfoundComponent
     } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingComponents=[
                                    HomeComponent,
                                    PagenotfoundComponent,
                                    ForgotPasswordComponent,
                                    SignupComponent,
                                    LoginComponent,
                                    ChangePasswordComponent,
                                  
                                  ]