import { Component, OnInit } from '@angular/core';
import {  FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ResetFormType } from '@rxweb/reactive-form-validators';
import { BookingService } from 'src/app/service/booking.service';
import { FlightserviceService } from 'src/app/service/flightservice.service';
import { Flights } from '../models/flights';
import { Passenger } from '../models/passenger';
@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.scss']
})
export class SearchFlightComponent implements OnInit {

 passengerForm:FormGroup;
 flightForm:FormGroup;
 flight:any;
 from:any;
 to:any;
 date:any;
 flightid:number=0;
 userId:any;
 passenger = new Passenger("","",0);
 passengers:Passenger[]=[];


  constructor(
    private flightservice:FlightserviceService,
    private router:Router,
    private bookService:BookingService

  ) {
    this.flightForm = new FormGroup({
        from: new FormControl('',[Validators.required]),
        to: new FormControl('',[Validators.required]),
        date: new FormControl('',[Validators.required]),

    })

    this.passengerForm = new FormGroup({
        userid:new FormControl('', Validators.required),
        name:new FormControl('',Validators.required),
        gender:new FormControl('',Validators.required),
        age:new FormControl('',[Validators.required,Validators.min(18), Validators.max(80)])
      })
   }

  ngOnInit(): void {

  }


    findFlight():void{

      console.log("Details from search Flight");
      console.log(this.flightForm.value);
      this.from=this.flightForm.value.from;
      this.to=this.flightForm.value.to;
      this.date=this.flightForm.value.date;
      this.flightservice.searchFlight(this.from, this.to, this.date).subscribe((res)=>{
          console.log(res);

          this.flight = res;
          console.log("this is after assign to flight")
          console.log(this.flight);
        this.resetflightForm();
        this.flight=new this.flight()
      });


    }
    resetflightForm(){
      this.flightForm.reset();
    }

    getFlightId(flightId:number){
      this.flightid = flightId;
      console.log("this is flight ID  :"+this.flightid)
    }

    bookTicket(){

      this.userId = this.passengerForm.value.userid;
      this.passenger.name= this.passengerForm.value.name;
      this.passenger.age=this.passengerForm.value.age;
      this.passenger.gender= this.passengerForm.value.gender;
      this.passengers.push(this.passenger);

      console.log(" this is user id :"+this.userId);
      console.log(this.passenger);

      console.log("this is flight from book ticket  :" +this.flightid)

      this.bookService.bookticket(this.flightid, this.passengers,this.userId).subscribe((res)=>{

        console.log(res);

        this.passenger = new Passenger();
        this.passengerForm.reset();
      })


    }



}
