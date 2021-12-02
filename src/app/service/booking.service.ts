import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passenger } from '../components/models/passenger';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseurl : string= "http://localhost:9091/api/v1.0/booking/";
  stringJson: string="";

  constructor(private http:HttpClient) { }

  bookticket(flightid:number, passengers:Passenger[], userId:number) {

    this.stringJson = JSON.stringify(passengers);
    console.log(`book ticket service ${this.stringJson} dsdsd`);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let options = { headers: headers };

    return this.http.post(this.baseurl+"users/"+userId+"/flight/"+flightid+"?discountCoupon",this.stringJson,options);
      this.stringJson="";
  }

  ticketByPnr(pnr :number){

    return this.http.get(this.baseurl+'ticket/'+pnr)
  }

  ticketByEmail(email:string){
    console.log(email)
    return this.http.get(this.baseurl+'history/'+email)
  }
}
