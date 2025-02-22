import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { ReservationComponent } from './components/public/reservation/reservation.component';
import { NowPlayingComponent } from './components/public/now-playing/now-playing.component';
import { TrailersComponent } from './components/public/trailers/trailers.component';
import { ComingSoonComponent } from './components/public/coming-soon/coming-soon.component';
import { PriceListComponent } from './components/public/price-list/price-list.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NewsComponent } from './components/public/news/news.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: ":city", children: [
    {path: "", component: NewsComponent},
    {path: "reservation", component: ReservationComponent},
    {path: "now-playing", component: NowPlayingComponent},
    {path: "trailers", component: TrailersComponent},
    {path: "coming-soon", component: ComingSoonComponent},
    {path: "price-list", component: PriceListComponent},
    {path: "contact", component: ContactComponent},
  ]},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
