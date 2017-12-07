import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Components
import { AppComponent } from './app.component';
import { BannerComponent } from './home/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { OperatingHoursComponent } from './home/operating-hours/operating-hours.component';
import { ContactComponent } from './home/contact/contact.component';
import { ContactFormComponent } from './home/contact-form/contact-form.component';
import { HighlightsComponent } from './home/highlights/highlights.component';
import { ShowErrorComponent } from './shared/show-error/show-error.component';

// Services
import { ContactFormService } from './home/contact-form/contact-form.service';
import { ReviewsService } from './home/reviews/reviews.service';

// Shared
import { FadeDirective } from './shared/fade.directive';
import { ResponsiveLogoDirective } from './shared/responsive-logo.directive';
import { FluidDirective } from './shared/fluid.directive';
import { ToggleLinkDirective } from './shared/toggle-link.directive';
import { FontSizeDirective } from './shared/font-size.directive';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { RatingStarsComponent } from './home/rating-stars/rating-stars.component';
import { DateBrPipe } from './shared/date-br.pipe';

// Enviroment
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FadeDirective,
    BannerComponent,
    OperatingHoursComponent,
    ResponsiveLogoDirective,
    FluidDirective,
    ToggleLinkDirective,
    FontSizeDirective,
    ContactComponent,
    ContactFormComponent,
    ShowErrorComponent,
    HighlightsComponent,
    ReviewsComponent,
    RatingStarsComponent,
    DateBrPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal' }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [
    ContactFormService,
    ReviewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
