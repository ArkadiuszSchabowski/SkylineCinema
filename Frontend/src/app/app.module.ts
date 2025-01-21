import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from 'src/app/components/_shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './_modules/angular-material/angular-material.module';
import { PublicModule } from './_modules/public/public.module';
import { AuthModule } from './_modules/auth/auth.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxBootstrapModule } from './_modules/ngx-bootstrap/ngx-bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgxBootstrapModule,
    AuthModule,
    PublicModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
