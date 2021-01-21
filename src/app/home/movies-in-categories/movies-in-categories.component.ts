import { Component, HostListener, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { NavigationMethodsService } from 'src/app/navigation-methods.service';

const genresInHomePage = [
  { id: 36, genre: 'History' }, { id: 10749, genre: 'Romance' },
  { id: 18, genre: 'Drama' }, { id: 35, genre: 'Comedy' },
  { id: 80, genre: 'Crime' }, { id: 99, genre: 'Documentary' }]

@Component({
  selector: 'app-movies-in-categories',
  templateUrl: './movies-in-categories.component.html',
  styleUrls: ['./movies-in-categories.component.sass']
})
export class MoviesInCategoriesComponent implements OnInit {
  moviesByGenre = []
  genres
  carouselCellsToShow = 5
  constructor(
    public moviesService: MoviesService,
    public navigationMethodsService: NavigationMethodsService
  ) { }

  ngOnInit(): void {
    genresInHomePage.map(genre => { this.getMoviesByGenre(genre) })
    this.onResize(window.innerWidth);
    window.scroll({
      top: 10,
      left: 0,
      behavior: 'smooth'
    });
  }
  onResize(width) {
    console.log(width, 'window.innerWidth')
    switch (true) {
      case (width < 475):
        this.carouselCellsToShow = 1
        break;
      case (width < 600):
        this.carouselCellsToShow = 2
        break;
      case (width < 650):
        this.carouselCellsToShow = 3
        break;
      case (width < 850):
        this.carouselCellsToShow = 4
        break;
      case (width < 1000):
        this.carouselCellsToShow = 5
        break;
      case (width >= 1000):
        this.carouselCellsToShow = 6
        break;
      default:
        break;
    }
  }

  goToDetails(id, movieDataViewingInDetail) {
    this.moviesService.movieDataViewingInDetail = movieDataViewingInDetail
    this.navigationMethodsService.goToDetails(id)
  }

  getMoviesByGenre(genre) {
    this.moviesService.getMoviesByGenre(genre.id)
      .subscribe(data => { this.moviesByGenre.push({ data, genre: genre.genre }); })
  }

}
