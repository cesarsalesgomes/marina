import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class ContactFormService {

  constructor(
    private afs: AngularFirestore
  ) { }
}