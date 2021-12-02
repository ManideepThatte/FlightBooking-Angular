import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AdminComponent } from './components/admin/admin.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { AirlineComponent } from './components/airline/airline.component';
import { FlightsComponent } from './components/flights/flights.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { HomeNavComponent } from './components/home-nav/home-nav.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';
import { SearchticketComponent } from './components/searchticket/searchticket.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserloginComponent,
    AirlineComponent,
    FlightsComponent,
    AdminNavComponent,
    UsernavComponent,
    HomeNavComponent,
    SearchFlightComponent,
    SearchticketComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    RxReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
