import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './movie';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiToken = 'c3f362829cda7e804b7692fdaf065345'
  movieUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiToken}`
  movieGenreList = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiToken}&language=en-US`
  page = 1
  genres;
  // heroes$: Observable<Hero[]>;
  movieDataViewingInDetail: any
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

  getMovieGenreList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieGenreList)
      .pipe(
        tap(genres => { this.log('fetched movie genre list'); this.genres = genres; }),
        catchError(this.handleError<Movie[]>('getGenreList ', [])) /* // ??? */
      );
  }
  getMoviesByGenre(genre, nextPg?): Observable<Movie[]> {
    if (nextPg === true) this.page++
    else if (nextPg === false) this.page--

    return this.http.get<Movie[]>(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiToken}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.page}&with_genres=${genre}`)
      .pipe(
        tap(_ => this.log('fetched movie genre list')),
        catchError(this.handleError<Movie[]>('getGenreList ', [])) /* // ??? */
      );
  }
  getMoviesByYear(year, nextPg?): Observable<Movie[]> {
    if (nextPg === true) this.page++
    else if (nextPg === false) this.page--

    return this.http.get<Movie[]>(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiToken}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.page}&year=${year}`)
      .pipe(
        tap(_ => this.log('fetched movie genre list')),
        catchError(this.handleError<Movie[]>('getGenreList ', [])) /* // ??? */
      );
  }
  getMoviesByTitle(title, nextPg?): Observable<Movie[]> {
    if (nextPg === true) this.page++
    else if (nextPg === false) this.page--
    
    return this.http.get<Movie[]>(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiToken}&language=en-US&query=${title}&page=${this.page}&include_adult=false`)
      .pipe(
        tap(_ => this.log('fetched movie genre list')),
        catchError(this.handleError<Movie[]>('getGenreList ', [])) /* // ??? */
      );
  }

  getMoviesById(movieId): Observable<Movie[]> {
    return this.http.get<Movie[]>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiToken}&language=en-US`)
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
