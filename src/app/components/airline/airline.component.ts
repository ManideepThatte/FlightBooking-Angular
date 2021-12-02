import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AirlineService } from 'src/app/service/airline.service';
import { Airline } from '../models/airline';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.scss']
})
export class AirlineComponent implements OnInit {

  airline:any;
  addAirlineForm=new FormGroup({});
  submitted = false;


  constructor(private airlineService: AirlineService,
    private router: Router , private Actroute: ActivatedRoute) { }

  ngOnInit(): void {

  }

  getAirLines()
{
  this.airlineService.getAllAirlines().subscribe((res:any)=>{
    console.log(res);
    this.airline = res;
    console.log(this.airline)
  })
}



}
