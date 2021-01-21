import { Component, OnInit } from '@angular/core';
import { Comedy, MovieTrending, Documentary } from 'src/app/movie';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-feature-movies',
  templateUrl: './feature-movies.component.html',
  styleUrls: ['./feature-movies.component.sass']
})
export class FeatureMoviesComponent implements OnInit {
  trendingMovies: MovieTrending
  moviesByGenre

  constructor(public moviesService: MoviesService) { }

  getTrendingMovies() {
    this.moviesService.getTrendingMovies()
      .subscribe(data => this.trendingMovies = data)
  }

  getMoviesByGenre() {
    this.moviesService.getMoviesByGenre('action')
      .subscribe(data => this.moviesByGenre = data)
  }

  ngOnInit(): void {
    this.getTrendingMovies()
    this.getMoviesByGenre()
  }
}
