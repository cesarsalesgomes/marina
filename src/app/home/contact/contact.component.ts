import { Component, ElementRef, OnInit, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('map') mapElement: ElementRef;

  constructor(private _renderer: Renderer) { }

  ngOnInit() {
    const loc = { lat: -22.000743, lng: -47.898585 };

    this._renderer.setElementStyle(
      this.mapElement.nativeElement,
      'height',
      this.setHeight()
    );

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 19,
      center: loc
    });

    const marker = new google.maps.Marker({
      position: loc,
      map: map
    });

    google.maps.event.addDomListener(window, 'resize', () => {
      this._renderer.setElementStyle(
        this.mapElement.nativeElement,
        'height',
        this.setHeight()
      )
      map.setCenter(loc);
    });
  }

  setHeight(): string {
    const innerWidth = window.innerWidth;

    if (innerWidth >= 1200) {
      return '400px';
    } else if (innerWidth >= 992) {
      return '350px';
    } else if (innerWidth >= 768) {
      return '300px';
    } else if (innerWidth >= 576) {
      return '250px';
    }
    return '200px';
  }
}
