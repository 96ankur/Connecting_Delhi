import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule, adminRoutingComponents } from './admin-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http'

import {AdminLoginService} from './Services/admin-login.service';
import {ComplaintsCountService} from './Services/complaints-count.service';
import {GraphService} from './Services/graph.service'
// For MDB Angular Free
import {
         ChartsModule ,
         WavesModule,
         CardsFreeModule,
        ButtonsModule
        } from 'angular-bootstrap-md';
import {
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
      } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule,WavesModule, CardsFreeModule,ButtonsModule,
    MatCardModule,MatTabsModule, MatFormFieldModule, MatInputModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
                  adminRoutingComponents, 
                ],
  providers:[AdminLoginService,ComplaintsCountService,GraphService]              

})
export class AdminModule { }
