import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { PageHomeComponent } from './home/page-home/page-home.component';
import { MoviesInCategoriesComponent } from './home/movies-in-categories/movies-in-categories.component';
import { FeatureMoviesComponent } from './home/feature-movies/feature-movies.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { PageDetailsComponent } from './details/page-details/page-details.component';
import { SearchbarComponent } from './layout/searchbar/searchbar.component';
import { PageDiscoverComponent } from './discover/page-discover/page-discover.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageHomeComponent,
    MoviesInCategoriesComponent,
    FeatureMoviesComponent,
    PageDetailsComponent,
    SearchbarComponent,
    PageDiscoverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
