import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FacebookReviews } from './facebook-reviews';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class ReviewsService {

  FACEBOOK_URL = `https://graph.facebook.com/1501184956776584?fields=ratings,overall_star_rating&access_token=${environment.facebookKey}`;

  constructor(private http: HttpClient) { }

  getFacebookReviews() {
    return this.http.get<FacebookReviews>(this.FACEBOOK_URL)
      .map((res: any) => {
        let arr = [];

        if (Array.isArray(res.ratings.data)) {
          arr = res.ratings.data
            .filter(item => 'review_text' in item)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5);
        }

        return {
          overall_star_rating: res.overall_star_rating,
          reviews: arr
        };
      });
  }
}