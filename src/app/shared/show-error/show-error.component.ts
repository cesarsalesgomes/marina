import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent {

  @Input() msg: string[];
  @Input() show: boolean[];

  constructor() { }

  check() {
    let msg = '';
    for (let i = 0; i < this.show.length; i++) {
      if (this.show[i]) {
        msg = this.msg[i];
        break;
      }
    }
    return msg;
  }

}
