import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule, userRoutingComponents } from './user-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//------------Services------------------------------------
import {RegisterCompService} from './Services/register-comp.service';
import {PostService} from './Services/post.service';
import {MyComplaintsService} from './Services/my-complaints.service';
import {ChangePasswordService} from './Services/change-password.service'


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatCardModule,
    FormsModule, ReactiveFormsModule,MatSelectModule,MatFormFieldModule, MatInputModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
                 userRoutingComponents,
               
                 
                ],
  providers:[RegisterCompService,PostService,MyComplaintsService,ChangePasswordService]              
})
export class UserModule { }