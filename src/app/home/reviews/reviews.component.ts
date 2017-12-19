import { Component, OnInit, NgZone } from '@angular/core';
import { ReviewsService } from './reviews.service';
import { FacebookReviews } from './facebook-reviews';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  overall_star_rating_google: number;
  overall_star_rating_facebook: number;
  reviews_google: any[];
  reviews_facebook: any[];

  constructor(
    private _reviews: ReviewsService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    // Facebook Reviews
    this._reviews.getFacebookReviews()
      .subscribe(data => {
        if (data.overall_star_rating) {
          this.overall_star_rating_facebook = data.overall_star_rating;
        }
        if (data.reviews) {
          this.reviews_facebook = data.reviews;
        }
      });

    // Google Reviews
    const service = new google.maps.places.PlacesService(document.createElement('div'));

    service.getDetails({
      placeId: 'ChIJV6eT4chwuJQRfJfxzZI3Zjc'
    }, (place, status) => {
      this.zone.run(() => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.overall_star_rating_google = place.rating;

          if (Array.isArray(place.reviews)) {
            this.reviews_google = place.reviews
              .filter(item => 'text' in item)
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 5);
          }
        }
      });
    });
  }

}
