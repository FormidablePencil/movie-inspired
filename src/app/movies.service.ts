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
  movieGenreList = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiToken}&language=en-US` /* get id of genre and use it to search movies by */
  page = 1
  // more data I believe https://api.themoviedb.org/3/movie/550?api_key=c3f362829cda7e804b7692fdaf065345
  constructor(private http: HttpClient) { }
  // fetch data

  getTrendingMovies(): Observable<Movie[]> {
    this.log('fetched heroes')
    return this.http.get<Movie[]>(this.movieUrl)
      .pipe(
        tap(_ => this.log('fetched movies')),
        catchError(this.handleError<Movie[]>('getTrendingMovies', [])) /* // ??? */
      );
  }

  // * depending on the url, fill in the areas

  getMovieGenreList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieGenreList)
      .pipe(
        tap(_ => this.log('fetched movie genre list')),
        catchError(this.handleError<Movie[]>('getGenreList ', [])) /* // ??? */
      );
  }
  getMoviesByGenre(genre): Observable<Movie[]> {
    return this.http.get<Movie[]>(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiToken}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.page}&with_genres=${genre}`)
      .pipe(
        tap(_ => this.log('fetched movie genre list')),
        catchError(this.handleError<Movie[]>('getGenreList ', [])) /* // ??? */
      );
  }
  getMoviesByYear(year): Observable<Movie[]> {
    return this.http.get<Movie[]>(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiToken}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.page}&year=${year}`)
      .pipe(
        tap(_ => this.log('fetched movie genre list')),
        catchError(this.handleError<Movie[]>('getGenreList ', [])) /* // ??? */
      );
  }
  getMoviesByTitle(title): Observable<Movie[]> {
    return this.http.get<Movie[]>(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiToken}&language=en-US&query=${title}&page=${this.page}&include_adult=false`)
      .pipe(
        tap(_ => this.log('fetched movie genre list')),
        catchError(this.handleError<Movie[]>('getGenreList ', [])) /* // ??? */
      );
  }

  searchMovie(): Observable<Movie[]> {
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
