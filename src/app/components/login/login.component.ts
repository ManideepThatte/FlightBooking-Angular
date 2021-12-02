import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
import { JwtResponse } from '../loginmodels/jwt-response';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm:FormGroup;
  isSubmitted = false;

  user:User= new User ("","");

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService:AuthenticationServiceService
  ){
    this.loginForm= new FormGroup({
      "username": new FormControl("",Validators.required),
      "password" : new FormControl("",Validators.required)
    });

   }

  ngOnInit(): void {
   }


   getLogin():void{
     console.log(this.loginForm.getRawValue());
     console.log(this.loginForm);
     this.isSubmitted = true;
     this.user = this.loginForm.value;

     this.authService.getLogin(this.user).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem('JWttoken',response.token);
      console.log("this is JWT token")
      console.log(localStorage.getItem('JWttoken'))
      this.router.navigate(["admin"]);
      this.authService.isLoggedIn=true;

  });

   }

}
