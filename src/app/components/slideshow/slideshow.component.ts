import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-respones';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {


  @Input() movies: Movie[];

  mySwiper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true
    });
  }

  ngOnInit(): void {
    // console.log(this.movies);
  }

  // tslint:disable-next-line: typedef
  onSlideNext() {
    this.mySwiper.slideNext();
  }

  // tslint:disable-next-line: typedef
  onSlidePrev() {
    this.mySwiper.slidePrev();
  }

}
