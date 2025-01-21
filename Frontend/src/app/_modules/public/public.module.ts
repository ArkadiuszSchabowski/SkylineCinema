import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/public/home/home.component';
import { NowPlayingComponent } from 'src/app/components/public/now-playing/now-playing.component';
import { ComingSoonComponent } from 'src/app/components/public/coming-soon/coming-soon.component';
import { ContactComponent } from 'src/app/components/public/contact/contact.component';
import { NewsComponent } from 'src/app/components/public/news/news.component';
import { PriceListComponent } from 'src/app/components/public/price-list/price-list.component';
import { ReservationComponent } from 'src/app/components/public/reservation/reservation.component';
import { TrailersComponent } from 'src/app/components/public/trailers/trailers.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
        HomeComponent,
        NowPlayingComponent,
        PriceListComponent,
        ContactComponent,
        ComingSoonComponent,
        TrailersComponent,
        ReservationComponent,
        NewsComponent
  ],
  imports: [
    CommonModule, AngularMaterialModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
        HomeComponent,
        NowPlayingComponent,
        PriceListComponent,
        ContactComponent,
        ComingSoonComponent,
        TrailersComponent,
        ReservationComponent,
        NewsComponent
  ]
})
export class PublicModule { }
