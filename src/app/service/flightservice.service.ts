import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flights } from '../components/models/flights';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {

  private baseurl="http://localhost:9091/api/v1.0/flights/";
  constructor(private httpClient:HttpClient) { }

  getAllFlight():Observable<any>{
    return this.httpClient.get(this.baseurl+'flights')
  }

  getFlightDetails(id:number):Observable<any>{
    return this.httpClient.get(this.baseurl+'flight/'+id)
  }

  addNewFLight(airlineiId:number , flight:Flights){
    return this.httpClient.post(this.baseurl+'airline/'+airlineiId+'/flight',flight)
  }

  delete(id:number){
    return this.httpClient.delete(this.baseurl+'deleteflight/'+id)
  }
  updateFlight(flight: Flights, airlineId: number, flightId: number) {
    let jsonString=JSON.stringify(flight);
    return this.httpClient.put(this.baseurl+'airline/'+airlineId+'/flight/'+flightId,jsonString)
  }

  searchFlight(from:string , to:string, date: string ){

    return this.httpClient.get(this.baseurl+'search?from='+from+'&to='+to+'&date='+date)

  }

}
