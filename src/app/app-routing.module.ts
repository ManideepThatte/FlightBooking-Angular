import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AirlineComponent } from './components/airline/airline.component';
import { FlightsComponent } from './components/flights/flights.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';
import { SearchticketComponent } from './components/searchticket/searchticket.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:'admin', component:AdminComponent},
  {path:"userlogin", component:UserloginComponent},
  {path:"airlines", component:AirlineComponent},
  {path:"flights" , component:FlightsComponent},
  {path:"addAirline", component:AirlineComponent},
  {path:"flightsearch", component:SearchFlightComponent},
  {path:"searchticket", component:SearchticketComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
