import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactDto } from 'src/app/_models/contact-dto';
import { ContactErrorDto } from 'src/app/_models/contact-error-dto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  model: ContactDto = new ContactDto();
  errors: ContactErrorDto = new ContactErrorDto();

  constructor(private toastr: ToastrService) {}

  trySendEmail(contactForm: NgForm) {
    this.errors = new ContactErrorDto();

    if (!this.model.email) {
      this.errors.email = 'E-mail jest wymagany!';
    } else if (!this.isValidEmail(this.model.email)) {
      this.errors.email = 'Niepoprawny format e-maila!';
    }

    if (!this.model.name || this.model.name.length < 3) {
      this.errors.name = 'Imię musi zawierać co najmniej 3 znaki';
    }

    if (!this.model.message || this.model.message.length < 25) {
      this.errors.message = 'Wiadomość musi zawierać co najmniej 25 znaków';
    }

    if (this.errors.email || this.errors.name || this.errors.message) {
      return;
    }

    contactForm.resetForm();

    //TO DO - implement API message validation implemantation and handle response

    this.toastr.success('Wiadomość została wysłana!');
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
