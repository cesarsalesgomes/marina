import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app.routing.module';

// Components
import { AppComponent } from './app.component';
import { BannerComponent } from './home/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './home/navigation/navigation.component';

// Shared
import { FadeDirective } from './shared/fade.directive';
import { OperatingHoursComponent } from './home/operating-hours/operating-hours.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FadeDirective,
    BannerComponent,
    OperatingHoursComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
