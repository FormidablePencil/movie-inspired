import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';
import { NavigationMethodsService } from 'src/app/navigation-methods.service';

@Component({
  selector: 'app-page-discover',
  templateUrl: './page-discover.component.html',
  styleUrls: ['./page-discover.component.sass']
})
export class PageDiscoverComponent implements OnInit {
  searchResultsGenre

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private navigationMethodsService: NavigationMethodsService,
  ) { }

  ngOnInit(): void {
    // this.getMovies()
    this.route.queryParams.subscribe(params => {
      this.getMovies()
    })
  }

  goBack() {
    this.navigationMethodsService.goBack()
  }

  goToDetails(id) {
    this.navigationMethodsService.goToDetails(id)
  }
  
  navigateNext(navNext) {
    if (navNext) this.getMovies(true)
    else this.getMovies(false)
    console.log('hit')
  }

  getMovies(nextPg?) {
    const param = this.route.snapshot.queryParams;
    switch (true) {
      case Object.keys(param)[0] === 'genre':
        this.moviesService.getMoviesByGenre(Object.values(param)[0], nextPg)
          .subscribe(data => this.searchResultsGenre = data)
        break;
      case Object.keys(param)[0] === 'year':
        this.moviesService.getMoviesByYear(Object.values(param)[0], nextPg)
          .subscribe(data => this.searchResultsGenre = data)
        break;
      case Object.keys(param)[0] === 'title':
        this.moviesService.getMoviesByTitle(Object.values(param)[0], nextPg)
          .subscribe(data => { this.searchResultsGenre = data; console.log(data, 'darta') })
        break;
      default:
        break;
    }
  }
}
