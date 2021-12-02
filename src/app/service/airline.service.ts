import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airline } from '../components/models/airline';


@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  private baseurl="http://localhost:9091/api/v1.0/flights/";


  constructor(private httpClient:HttpClient) { }

  getAllAirlines():Observable<any>{
    console.log(localStorage.getItem('JWTtoken'))
    console.log("this is Admin API call")
    return this.httpClient.get<any>(this.baseurl+'airline');
}

deleteAirline(id:number):Observable<any>{

  return this.httpClient.delete<any>(this.baseurl+'delete/'+id )

  }

blockAirline(id:number):Observable<any>{
  return this.httpClient.put<any>(this.baseurl+'airline/block/'+id,null )
}

addNewAirline(airline:Airline):Observable<any>{
   return this.httpClient.post<any>(this.baseurl+'airline',airline);
}
updateAirline(airlineId:number, airline:Airline){
 return this.httpClient.put<any>(this.baseurl+'update/'+airlineId,airline)
}

}



