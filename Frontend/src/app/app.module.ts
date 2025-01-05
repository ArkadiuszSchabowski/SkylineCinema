import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/_shared/navbar/navbar.component';
import { HomeComponent } from './components/public/home/home.component';
import { NowPlayingComponent } from './components/public/now-playing/now-playing.component';
import { PriceListComponent } from './components/public/price-list/price-list.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { ComingSoonComponent } from './components/public/coming-soon/coming-soon.component';
import { TrailersComponent } from './components/public/trailers/trailers.component';
import { ReservationComponent } from './components/public/reservation/reservation.component';
import { BookedComponent } from './components/login/booked/booked.component';
import { CinemaHomeComponent } from './components/public/cinema-home/cinema-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NowPlayingComponent,
    PriceListComponent,
    ContactComponent,
    ComingSoonComponent,
    TrailersComponent,
    ReservationComponent,
    BookedComponent,
    CinemaHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
