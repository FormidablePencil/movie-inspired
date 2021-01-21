import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {
  movieGenreList
  searchBy = ['title', 'genre', 'top movies by year']
  selected = 'title'
  years = [2021, 2020, 2019]
  constructor(
    public moviesService: MoviesService,
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getMovieGenreList()
  }

  selectSearchBy(searchBy) {
    this.selected = searchBy
  }

  getMovieGenreList() {
    this.moviesService.getMovieGenreList()
      .subscribe((data: any) => this.movieGenreList = data.genres)
  }

  search() {
    this.router.navigateByUrl('/discover?genre=10749');
    // this.router.navigateByUrl('/discover?title=arm');
    // this.router.navigateByUrl('/discover?year=2000');
    // navigate to search page
    console.log('search')
  }
}
