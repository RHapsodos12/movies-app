import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-respones';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  constructor( private http: HttpClient ) {

  }

  // tslint:disable-next-line: typedef
  getCartelera(): Observable<CarteleraResponse> {
    return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=6966d54b746f292ab89eb31db8dc6a5f&language=es-ES&page=1');
  }
}
