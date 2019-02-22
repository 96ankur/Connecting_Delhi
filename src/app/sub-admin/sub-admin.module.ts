import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubAdminRoutingModule, subAdminRoutingComponents } from './sub-admin-routing.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatCardModule,MatSelectModule} from '@angular/material';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {SubAdminLoginService} from './Services/sub-admin-login.service';
import {ComplaintsCountService} from './Services/complaints-count.service';
import {DisplayComplaintsService} from './Services/display-complaints.service';
import {SortingService} from './Services/sorting.service';
import {StatusChangeService} from './Services/status-change.service';


@NgModule({
  imports: [
    CommonModule,
    SubAdminRoutingModule,
    
    MDBBootstrapModule.forRoot(),
    MatCardModule,MatSelectModule,MatFormFieldModule, MatInputModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule

  ],
  declarations: [subAdminRoutingComponents, ],
  providers: [SubAdminLoginService,ComplaintsCountService, DisplayComplaintsService,SortingService,StatusChangeService],

})
export class SubAdminModule { }
