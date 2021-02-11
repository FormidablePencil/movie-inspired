import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {
  movieGenreList
  searchBy = ['title', 'genre', 'year']
  selected = 'title'
  years = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010]
  toSearch

  constructor(public moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.getMovieGenreList()
  }

  selectSearchBy(searchBy) {
    this.selected = searchBy

    if (searchBy === 'genre') this.toSearch = this.movieGenreList[0].id
    if (searchBy === 'year') this.toSearch = this.years[0]
    if (searchBy === 'title') this.toSearch = ''
  }

  getMovieGenreList() {
    this.moviesService.getMovieGenreList()
      .subscribe((data: any) => this.movieGenreList = data.genres)
  }

  search() {
    this.moviesService.movieDataViewingInDetail = null
    if (this.toSearch)
      this.router.navigateByUrl(`/discover?${this.selected}=${this.toSearch}`);
  }
}
