import { Component, OnInit } from '@angular/core';
import { Comedy, MovieTrending, Documentary } from 'src/app/movie';
import { MoviesService } from 'src/app/movies.service';
import { NavigationMethodsService } from 'src/app/navigation-methods.service';

@Component({
  selector: 'app-feature-movies',
  templateUrl: './feature-movies.component.html',
  styleUrls: ['./feature-movies.component.sass']
})
export class FeatureMoviesComponent implements OnInit {
  trendingMovies
  moviesByGenre
  carouselCellsToShow = 5

  constructor(public moviesService: MoviesService, public navigationMethodsService: NavigationMethodsService) { }

  getTrendingMovies() {
    this.moviesService.getTrendingMovies()
      .subscribe(data => this.trendingMovies = data)
  }

  ngOnInit(): void {
    this.getTrendingMovies()
    this.onResize(window.innerWidth);
  }

  onResize(width) {
    console.log(width, 'window.innerWidth')
    switch (true) {
      case (width < 475):
        this.carouselCellsToShow = 1
        break;
      case (width < 600):
        this.carouselCellsToShow = 1
        break;
      case (width < 650):
        this.carouselCellsToShow = 2
        break;
      case (width < 850):
        this.carouselCellsToShow = 3
        break;
      case (width < 1000):
        this.carouselCellsToShow = 4
        break;
      case (width >= 1000):
        this.carouselCellsToShow = 4
        break;
      default:
        break;
    }
  }

  goToDetails(id, movieData) {
    this.moviesService.movieDataViewingInDetail = movieData /* might be illegal */
    this.navigationMethodsService.goToDetails(id)
  }
}
