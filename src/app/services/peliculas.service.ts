import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { CarteleraResponse, Movie } from '../interfaces/cartelera-respones';
import { MovieResponse } from '../interfaces/movie-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  // tslint:disable-next-line: ban-types
  private url: String = 'https://api.themoviedb.org/3';
  private page = 1;
  public cargando = false;

  constructor( private http: HttpClient ) { }

  // tslint:disable-next-line: typedef
  get params() {
    return {
      api_key: environment.apiKey,
      language: 'es-ES',
      page: this.page.toString(),
    };
  }

  // tslint:disable-next-line: typedef
  resetCarteleraPage() {
    this.page = 1;
  }

  // tslint:disable-next-line: typedef
  getCartelera(): Observable<Movie[]> {

    if ( this.cargando) {
      return of( [] );
    }

    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${ this.url }/movie/now_playing`, {
      params: this.params
    }).pipe(
      map( (resp) => resp.results),
      tap( () => {
        this.page += 1;
        this.cargando = false;
      })
    );

  }

  // tslint:disable-next-line: typedef
  buscarPeliculas( texto: string ): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: texto };

    return this.http.get<CarteleraResponse>(`${ this.url }/search/movie`, {
      params
    }).pipe(
      map( resp => resp.results )
    );
  }

  // tslint:disable-next-line: typedef
  getPeliculaDetalle( id: string ) {
    return this.http.get<MovieResponse>(`${ this.url }/movie/${ id }`, {
      params: this.params
    }).pipe(
      catchError( err => of(null))
    );
  }

  // tslint:disable-next-line: typedef
  getCast( id: string ): Observable<Cast[]> {
    return this.http.get<CreditsResponse>(`${ this.url }/movie/${ id }/credits`, {
      params: this.params
    }).pipe(
      map( resp => resp.cast ),
      catchError( err => of([]))
    );
  }

}
