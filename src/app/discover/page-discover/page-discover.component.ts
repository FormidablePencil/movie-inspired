import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-discover',
  templateUrl: './page-discover.component.html',
  styleUrls: ['./page-discover.component.sass']
})
export class PageDiscoverComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
