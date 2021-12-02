import { Component,OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from '@rxweb/reactive-form-validators';
import { BookingService } from 'src/app/service/booking.service';
import { Passenger } from '../models/passenger';
import { TicketHistory } from '../models/ticket-history';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-searchticket',
  templateUrl: './searchticket.component.html',
  styleUrls: ['./searchticket.component.scss']
})
export class SearchticketComponent implements OnInit {

  ticketHistory:any="";
  ticketform:FormGroup;
  pnrform:FormGroup;
  email :string="";
  pnr:number=0;
  tkt:any;
  ticketPassengers:any[]=[];
  ticketByEmail:any[]=[];


  //ticketDetails= new TicketHistory("","","",0,"","",0)

  constructor(

    private bookingservice:BookingService,
    private router:Router

  ) {
    this.ticketform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9._]+@[a-z0-9.]+\\.[a-z]{2,3}")])
    }),
    this.pnrform= new FormGroup({
      pnr:new FormControl('',Validators.required)

    })
  }



  ngOnInit(): void {


  }

  getTicketByEmail(){

    this.email=this.ticketform.value.email
    console.log("this is user email :"+this.email);

    this.bookingservice.ticketByEmail(this.email).subscribe((res:any)=>{
     console.log(res);
     this.tkt= [res];
      console.log("this is from email service getting res:" +this.tkt )
    })

  }
  getTicketByPnr(){

    this.pnr=this.pnrform.value.pnr;
    console.log("this is Ticket PNR number :"+this.pnr);
    this.bookingservice.ticketByPnr(this.pnr).subscribe((res:any)=>{
      console.log(res);
      this.ticketHistory= res;
      this.ticketPassengers = this.ticketHistory.passengers;
      console.log(this.ticketHistory.flightName)
      console.log(this.ticketPassengers)
      this.pnrform.reset();
    })
  }


  downloadPDF()
  {
    console.log("import jspdf from 'jspdf';");
     let data = document.getElementById('download');
     console.log(data);
    // html2canvas(data).then(canvas => {

    //   let imgWidth = 208;
    //   let pageHeight = 295;
    //   let imgHeight = canvas.height * imgWidth / canvas.width;
    //   let heightLeft = imgHeight;
    //   let pdf = new jspdf('p', 'mm', 'a4');
    //   let position = 0;

    //  pdf.text(data.innerHTML,pageHeight,pageHeight);
    //   pdf.save('myTicket.pdf');
    // });
    const doc = new jsPDF()
    autoTable(doc, { html:'#download'});
    doc.save('table.pdf')
  }


  // generatePDF() {
  //   var data = document.getElementById('download');
  //   html2canvas(data).then(canvas => {
  //     var imgWidth = 208;
  //     var imgHeight = canvas.height * imgWidth / canvas.width;
  //     const contentDataURL = canvas.toDataURL('image/png')
  //     let pdf = new jsPDF('p', 'mm', 'a4');
  //     var position = 0;
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  //     pdf.save('newPDF.pdf');
  //   });
  // }
}
