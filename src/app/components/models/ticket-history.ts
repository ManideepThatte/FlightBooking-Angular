import { Passenger } from "./passenger";

export class TicketHistory {

    constructor(

      public flightName:string,
      public flightdate:string,
      public flightTime:string,
      public pnr:number,
      public status:string,
      public couponApplied:string,
      public price:number,
      public airLine:string,
      public userId:string,
      public passenger:Passenger[]=[],
    ){}
}
