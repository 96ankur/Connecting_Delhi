import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
   COMPONENTS INSIDE SUB-ADMIN MODULE
*/
import { LoginComponent } from './login/login.component';
import { NorthDelhiComponent } from './north-delhi/north-delhi.component';
import { SouthDelhiComponent } from './south-delhi/south-delhi.component';
import { EastDelhiComponent } from './east-delhi/east-delhi.component';
import { NewDelhiComponent } from './new-delhi/new-delhi.component';
import { DelhiCantonmentBoardComponent } from './delhi-cantonment-board/delhi-cantonment-board.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ComplaintBoxComponent } from './complaint-box/complaint-box.component';

/*
   ROUTING INSIDE SUB-ADMIN MODULE
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
                           path:'delhiCantonmentBoard',
                           component:DelhiCantonmentBoardComponent
                         },
                         {
                           path:'northDelhiMunicipalCorporation',
                           component:NorthDelhiComponent
                         },
                         {
                           path:'southDelhiMunicipalCorporation',
                           component:SouthDelhiComponent,
                         },
                         {
                           path:'eastDelhiMunicipalCorporation',
                           component:EastDelhiComponent
                         },
                         {
                           path:'newDelhiMunicipalCorporation',
                           component:NewDelhiComponent
                         },
                         {
                           path:'complaintBox/:category',
                           component:ComplaintBoxComponent
                         },
                         {
                           path:'changePassword',
                           component:ChangePasswordComponent
                         }
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubAdminRoutingModule { }


export const subAdminRoutingComponents=[
                                        LoginComponent, 
                                        NorthDelhiComponent, 
                                        SouthDelhiComponent, 
                                        EastDelhiComponent, 
                                        NewDelhiComponent, 
                                        DelhiCantonmentBoardComponent,
                                        ChangePasswordComponent,
                                        ComplaintBoxComponent
                                       ]
