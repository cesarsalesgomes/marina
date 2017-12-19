import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactForm } from './contact-form';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactFormService {

  readonly URL = 'https://us-central1-marina-c0b30.cloudfunctions.net/contactEmail';

  constructor(private http: HttpClient) { }

  sendEmail(form: ContactForm): Observable<Object> {
    return this.http.post(this.URL, form, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    });
  }
}
