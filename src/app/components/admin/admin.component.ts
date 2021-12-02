import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService } from 'src/app/service/airline.service';
import { Airline } from '../models/airline';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  airline:any;
  message:any;
  newAirline:Airline = new Airline(0,"","","");


  constructor(private airlineService: AirlineService,
    private router: Router, private Actroute: ActivatedRoute) { }

  ngOnInit(): void {
  this.getAirLines();

  }

  getAirLines()
{
  this.airlineService.getAllAirlines().subscribe((res:any)=>{
    console.log(res);
    this.airline = res;
    console.log(this.airline)
  })
}
delete(id:number){

  this.airlineService.deleteAirline(id).subscribe((data)=>{
    this.getAirLines();
  })

}

    block(id:number){
      this.airlineService.blockAirline(id).subscribe((data)=>{
        this.getAirLines();
      })
    }



    public registerNow(data:any){

      console.log(data)

      this.airlineService.addNewAirline(data).subscribe((res)=>{
        this.getAirLines();
      })
    }

    updateAirline(airlineId:number, airline:Airline){

      this.airlineService.updateAirline(airlineId,airline).subscribe((res)=>{

        console.log(res);
        this.getAirLines();

      })

    }
}
