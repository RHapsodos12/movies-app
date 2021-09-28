import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-respones';

import { StarRatingComponent } from 'ng-starrating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: Movie[];

  constructor( private router: Router ) { }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  // tslint:disable-next-line: typedef
  onRate( $event: {oldValue: number, newValue: number, starRating: StarRatingComponent } ) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  // tslint:disable-next-line: typedef
  onMovieClick( movie: Movie ) {
    // console.log(movie);
    this.router.navigate(['/pelicula', movie.id]);
  }

}
