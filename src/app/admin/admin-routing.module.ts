import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
   COMPONENTS INSIDE ADMIN MODULE
*/
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DCBdetailsComponent } from './dcbdetails/dcbdetails.component';
import { NorthDMCdetailsComponent } from './north-dmcdetails/north-dmcdetails.component';
import { EDMCdetailsComponent } from './edmcdetails/edmcdetails.component';
import { SDMCdetailsComponent } from './sdmcdetails/sdmcdetails.component';
import { NewDMCdetailsComponent } from './new-dmcdetails/new-dmcdetails.component';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';

/*
   ROUTING INSIDE ADMIN MODULE
*/


const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  
  },
  { 
   path:'login',
   component:LoginComponent,
  },

  {
    path:'dashboard',
    component:DashboardComponent,  
  },
  {
    path:'delhiCantonmentBoardDetails',
    component:DCBdetailsComponent
  },
 
  {
    path:'southDelhiMunicipalCorporationDetails',
    component:SDMCdetailsComponent,
  },
  {
    path:'eastDelhiMunicipalCorporationDetails',
    component:EDMCdetailsComponent
  },
  {
    path:'newDelhiMunicipalCorporationDetails',
    component:NewDMCdetailsComponent
  },

  {
    path:'northDelhiMunicipalCorporationDetails',
    component:NorthDMCdetailsComponent
  },
  {
    path:'changePassword',
    component:AdminChangePasswordComponent,
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const adminRoutingComponents=[
                                      LoginComponent,
                                      DashboardComponent,
                                      AdminChangePasswordComponent,
                                      DCBdetailsComponent,
                                      SDMCdetailsComponent,
                                      EDMCdetailsComponent,
                                      NorthDMCdetailsComponent,
                                      NewDMCdetailsComponent,
                                    ]
