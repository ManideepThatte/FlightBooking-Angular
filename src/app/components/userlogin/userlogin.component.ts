import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  loginForm = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  });
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit():void{
    console.log(this.loginForm.getRawValue());
    this.http.post('http://localhost:9091/api/v1.0/admin/authenticate', this.loginForm.getRawValue(),
    {withCredentials: true})
     .subscribe((data) => {
     console.log(data)
     this.router.navigate(['flightsearch'])
   });

  }
}
