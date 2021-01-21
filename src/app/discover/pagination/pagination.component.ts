import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {
  currentPage = 9
  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  paginate(num) {
    this.moviesService.page = num
  }
}
