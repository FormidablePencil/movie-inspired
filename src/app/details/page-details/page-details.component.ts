import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/movies.service';
import { NavigationMethodsService } from 'src/app/navigation-methods.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.sass']
})
export class PageDetailsComponent implements OnInit {
  movieDataViewingInDetail
  genres
  constructor(
    public navigationMethodsService: NavigationMethodsService,
    public moviesService: MoviesService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (this.moviesService.movieDataViewingInDetail) this.movieDataViewingInDetail = this.moviesService.movieDataViewingInDetail
    const movieId = this.route.snapshot.params.id
    this.moviesService.getMoviesById(movieId)
      .subscribe(data => { if (!this.movieDataViewingInDetail) this.movieDataViewingInDetail = data; console.log(this.movieDataViewingInDetail) })
    this.getGenres()
  }

  getGenres() {
    this.moviesService.getMovieGenreList().subscribe(item => item = this.genres)
  }

  clickOnGenre() {

  }

  getGenreById(id): Observable<any> {
    console.log(id, this.genres, 'fddddd')
    console.log(this.genres.find(item => item.id === id), 'id')
    return this.genres.find(item => item.id === id)
  }

  goBack() {
    this.navigationMethodsService.goBack()
  }

}
