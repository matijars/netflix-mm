import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  tmdb = environment.tmdb;
  http = inject(HttpClient);

  getPopularMovies(): Observable<any> {
    const url = `${this.tmdb.movie_base_url}popular?api_key=${this.tmdb.api_key}`;

    return this.http.get(url);
  }

  getTopRatedMovies(): Observable<any> {
    const url = `${this.tmdb.movie_base_url}top_rated?api_key=${this.tmdb.api_key}`;

    return this.http.get(url);
  }

  getUpcomingMovies(): Observable<any> {
    const url = `${this.tmdb.movie_base_url}upcoming?api_key=${this.tmdb.api_key}`;

    return this.http.get(url);
  }

  getMovieDetails(movieId: string): Observable<any> {
    const url = `${this.tmdb.movie_base_url}${movieId}?api_key=${this.tmdb.api_key}`;

    return this.http.get(url);
  }
}