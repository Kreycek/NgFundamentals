import { Component, Inject, Injectable, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';
import { AuthService } from './auth.service';

@Component({
  templateUrl:'./profile.component.html',
  styles:[`
  em {float:right; color:#E05C65; padding-left:10px;} 
  .error input {background-color:#E3C3E5;}
  .error ::-webkit-input-placeholder {color:#999;}
  .error ::-moz-placeholder {color:#999;}
  .error :-moz-placeholder {color:#999;}
  .error :ms-input-placeholder {color:#999;}
  `]
})
@Injectable({providedIn:'root'})
export class ProfileComponent implements OnInit {
       
  profileForm: FormGroup;
  firstName:FormControl;
  lastName:FormControl;
   constructor(
    //public profileForm:FormGroup, 
    public authService:AuthService,
    public route:Router,
    public formBuilder: FormBuilder,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
    ) {  }
  ngOnInit(): void {

   this.firstName = new FormControl(this.authService.currentUser?.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
   this.lastName = new FormControl(this.authService.currentUser?.lastName, Validators.required);   

   this.profileForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName
    });    
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
  cancel() {
    this.route.navigate(['events']);
  }

  saveProfile(formValues:any) {    

    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName,formValues.lastName);
      this.route.navigate(['events']);
    }
  }
}