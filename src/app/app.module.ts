import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule, appRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

//angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// MDB Angular Free
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http'

// root services
import {SignupService} from './Services/signup.service' 
import { RouterModule } from '@angular/router';
import {LoginService} from './Services/login.service';
import {ForgotPasswordService} from './Services/forgot-password.service';
import {ChangePasswordService} from './Services/change-password.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents,
     

  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule, WavesModule, ButtonsModule ,
    MatCardModule,MatTabsModule, MatFormFieldModule, MatInputModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [SignupService,LoginService,ForgotPasswordService,ChangePasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
