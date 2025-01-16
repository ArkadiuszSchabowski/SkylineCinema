import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  model = {
    email: '',
    password: ''
  };
  isPasswordVisible = true;
  errors = {
    email: '',
    password: ''
  };

  constructor(private toastr: ToastrService) {}

  changePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  tryLogin() {
    this.errors = { email: '', password: '' };

    if (!this.model.email) {
      this.errors.email = 'E-mail jest wymagany!';
    } 
    else if (!this.isValidEmail(this.model.email)) {
      this.errors.email = 'Niepoprawny format e-maila!';
    }

    if (!this.model.password) {
      this.errors.password = 'Hasło jest wymagane!';
    }

    if (this.errors.email || this.errors.password) {
      return;
    }

    // TO DO
    // this.toastr.success('Zalogowano pomyślnie!');
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}