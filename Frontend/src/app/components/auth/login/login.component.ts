import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginDto } from 'src/app/_models/login-dto';
import { LoginErrorDto } from 'src/app/_models/login-error-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  model: LoginDto = new LoginDto();
  errors: LoginErrorDto = new LoginErrorDto();

  isPasswordVisible = false;

  constructor(private toastr: ToastrService) {}

  changePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  tryLogin(loginForm: NgForm) {
    this.errors = new LoginErrorDto();

    if (!this.model.email) {
      this.errors.email = 'E-mail jest wymagany!';

    } else if (!this.isValidEmail(this.model.email)) {
      this.errors.email = 'Niepoprawny format e-maila!';
    }

    if (!this.model.password) {
      this.errors.password = 'Hasło jest wymagane!';
    }

    if (this.errors.email || this.errors.password) {
      return;
    }
    
    loginForm.resetForm();

    // TO DO - Implement API authentication and handle response

    this.toastr.success('Zalogowano pomyślnie!');
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
