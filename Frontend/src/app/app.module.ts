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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { NewsComponent } from './components/public/news/news.component';

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
    LoginComponent,
    RegisterComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
