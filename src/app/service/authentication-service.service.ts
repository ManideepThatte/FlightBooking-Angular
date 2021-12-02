import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../components/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  url:string="http://localhost:9091/api/v1.0/admin/authenticate";
  stringJson: string="";
  isLoggedIn:boolean=false;


  constructor(private http: HttpClient, private router:Router) {}



  getLogin(user : User){

      this.stringJson = JSON.stringify(user);
      console.log( "string json "+this.stringJson);
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
        let options = { headers: headers };
      return  this.http.post(this.url, this.stringJson,options);

  }

  loggedIn(){

    return !!localStorage.getItem('token');
  }

  getToken(){

    return localStorage.getItem('token');
  }

  getLogout(){

    localStorage.removeItem('token');
    this.isLoggedIn=false;
    this.router.navigate(['']);

  }
}
