import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ContactFormService } from './contact-form.service';
import { ContactForm } from './contact-form';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  maskTel = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  maskCel = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  action: string;

  constructor(
    private cfService: ContactFormService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(70)]],
      email: [null, [Validators.required, Validators.email]],
      cel: [null],
      tel: [null],
      message: [null, Validators.required]
    });
  }

  onSubmit() {
    const form: ContactForm = { ...this.form.value };
    this.action = 'sending';

    this.cfService.sendEmail(form)
      .subscribe(() => {
        this.form.reset();
        this.action = 'success';
        setTimeout(() => {
          this.action = '';
        }, 2000);
      },
      () => {
        this.action = 'error';
      });
  }

  checkRequiredTouched(field) {
    const f = this.form.get(field);

    if (f.touched && f.errors) {
      return f.errors['required'];
    }
  }

  checkEmail() {
    const email = this.form.get('email');

    if (email.touched && email.errors) {
      return email.errors['email'];
    }
  }
}
