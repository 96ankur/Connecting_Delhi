import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{Location} from './complaintInterface';
import{HttpClient} from '@angular/common/http';
import {RegisterCompService} from '../Services/register-comp.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-complaints',
  templateUrl: './register-complaints.component.html',
  styleUrls: ['./register-complaints.component.scss']
})

export class RegisterComplaintsComponent implements OnInit {
  loading: boolean = false;
  userComplaintsForm: FormGroup;
  selectedFile:File=null;
  public token
  
  problems:Location[]= [
    {value: 'Road', viewValue: 'Road'},
    {value: 'Water', viewValue: 'Water'},
    {value: 'Sewage', viewValue: 'Sewage'},
    {value: 'Electricity', viewValue: 'Electricity'}
  ];
 
  locations:Location[]= [
    {value: 'East', viewValue: 'East Zone'},
    {value: 'West', viewValue: 'West Zone'},
    {value: 'North', viewValue: 'North Zone'},
    {value: 'South', viewValue: 'South Zone'}
  ];
  agencies:Location[]= [
    {value:'NDMC', viewValue: 'North Delhi Mun. Corp.'},
    {value: 'SDMC', viewValue: 'South Delhi Mun. Corp.'},
    {value: 'EDMC', viewValue: 'East Delhi Mun. Corp.'},
    {value: 'DCB', viewValue: 'Delhi Cantonment Board'},
    {value: 'NewDMC', viewValue: 'New Delhi Mun. Corp.'},

  ];


  constructor(private fb: FormBuilder, private http:HttpClient, private RegisterCompService:RegisterCompService,
              private route:Router) {
                this.token=sessionStorage.getItem('x-auth-token')
                if(this.token==""||!this.token||this.token==undefined||this.token==null){
                  window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
                  (this.route.navigate(['home']))
                  }
               }


  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];
  
  }

  ngOnInit() {
    this.createForms();
  }



  
  createForms() {
    this.userComplaintsForm = this.fb.group({
      description:['', Validators.compose([Validators.required,])],
      area:['', Validators.compose([Validators.required])],
      handleBy:['', Validators.compose([Validators.required])],
      category:['', Validators.compose([Validators.required])],
      file:['', Validators.compose([Validators.required])],
      
    })

  }

  onSubmitUserComplaintsForm(value){
    this.loading = true;
    value.selectedFile=this.selectedFile;
    this.RegisterCompService.registerComplaints(value).subscribe((res:any)=>{
      if(res.status == 200){
        this.loading = false;
        window.alert(res.body);
        this.route.navigate(['user']);
      }else{
        this.loading = false;
        window.alert(res.msg);
      }
    })  
  }

  logout(){
    sessionStorage.removeItem('x-auth-token')
    this.route.navigate(['home'])
  }
}























