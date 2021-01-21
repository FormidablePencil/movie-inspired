import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationMethodsService {

  constructor(private router: Router, private location: Location) { }

  goToDetails(id) {
    this.router.navigate([`/detail/${id}`])
  }

  goBack() {
    this.location.back();
  }
}
