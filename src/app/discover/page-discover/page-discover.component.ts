import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-page-discover',
  templateUrl: './page-discover.component.html',
  styleUrls: ['./page-discover.component.sass']
})
export class PageDiscoverComponent implements OnInit {
  searchResultsGenre
  searchResultsYear
  searchResultsTitle

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    const param = this.route.snapshot.queryParams;
    switch (true) {
      case Object.keys(param)[0] === 'genre':
        this.moviesService.getMoviesByGenre(Object.values(param)[0])
          .subscribe(data => {this.searchResultsGenre = data; console.log(data, 'darta')})
        break;
      case Object.keys(param)[0] === 'year':
        this.moviesService.getMoviesByYear(Object.values(param)[0])
          .subscribe(data => this.searchResultsYear = data)
        break;
      case Object.keys(param)[0] === 'title':
        this.moviesService.getMoviesByTitle(Object.values(param)[0])
          .subscribe(data => this.searchResultsTitle = data)
        break;
      default:
        break;
    }
  }

  goBack() {
    this.location.back();
  }

}
