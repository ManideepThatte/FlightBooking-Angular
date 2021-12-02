import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FlightserviceService } from 'src/app/service/flightservice.service';
import { Flights } from '../models/flights';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

    flights:any
    airlineId:number=0;
    flight:Flights= new Flights("",0,"","","","",new Date,0,0,0);

  constructor(private flightService:FlightserviceService,
    private router: Router,
    private Actroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.getAllFlights();
  }

  getAllFlights(){
    console.log ("inside Flight Service")

    this.flightService.getAllFlight().subscribe((res)=>{
      console.log(res);
      this.flights=res;
      console.log("after assign the values to Flight object")
      console.log(this.flights);

    })
  }

  addFlight(data:any ){
    this.flightService.addNewFLight(this.airlineId,data).subscribe((data)=>{
      this.getAllFlights();
    })

  }

  deleteById(flightId:number){
    this.flightService.delete(flightId).subscribe((res)=>{
      this.getAllFlights();
    })
  }

  updateFlight(flight:Flights, airlineId:number, flightId:number){

    console.log(flight);
    console.log(airlineId);
    console.log(flightId);

    this.flightService.updateFlight(flight, airlineId,flightId).subscribe((res)=>{
      this.getAllFlights();
    })
  }

}
