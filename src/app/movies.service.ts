import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comedy, Movie } from './movie';
import { catchError, map, tap } from 'rxjs/operators';

const genres = ['comedy', 'thriller', 'sciFi', 'drama', 'action', 'epic', 'documentary']

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiToken = 'c3f362829cda7e804b7692fdaf065345'
  movieUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiToken}`
  // more data I believe https://api.themoviedb.org/3/movie/550?api_key=c3f362829cda7e804b7692fdaf065345
  constructor(private http: HttpClient) { }
  // fetch data

  getTrendingMovies(): Observable<Movie[]> {
    this.log('fetched heroes')
    return this.http.get<Movie[]>(this.movieUrl)
      .pipe(
        tap(_ => this.log('fetched movies')),
        catchError(this.handleError<Movie[]>('getMovies', [])) /* // ??? */
      );
  }

  getMoviesByGenre(): Observable<Movie[]> {
    return
  }

  private handleError<T>(operation = 'operation', result?: T) { /* // ??? */
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  log(msg) {
    console.log(msg)
  }
}
