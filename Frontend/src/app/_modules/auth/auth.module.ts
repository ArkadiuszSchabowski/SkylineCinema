import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookedComponent } from 'src/app/components/auth/booked/booked.component';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { RegisterComponent } from 'src/app/components/auth/register/register.component';

@NgModule({
  declarations: [
        BookedComponent,
        LoginComponent,
        RegisterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
        BookedComponent,
        LoginComponent,
        RegisterComponent,
  ]
})
export class AuthModule { }
