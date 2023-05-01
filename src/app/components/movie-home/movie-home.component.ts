import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/service/movie.service';

type section = {
  title: string,
  movies: Observable<Movie[]>
}


@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent {

  browseMovies: section[] = [];
  nathansTestObservable$: Observable<any> | undefined;

  constructor(
    private movieService: MovieService
  ) {

  }

  ngOnInit() {
    this.browseMovies.push({
      title: "scooby doo like movies:",
      movies: this.movieService.search("scooby doo")
    })

    // this.nathansTestObservable$ = this.movieService.getGenres();
  }


// hover effect







// Scroll

  // upcoming
  rightUpcoming(): void {
    document.getElementById('scroll-upcoming').scrollLeft += 215;
  }

  leftUpcoming(): void {
    document.getElementById('scroll-upcoming').scrollLeft -= 215;
  }
  //

  // genres
  rightGenres(): void {
    document.getElementById('scroll-genres').scrollLeft += 215;
  }

  leftGenres(): void {
    document.getElementById('scroll-genres').scrollLeft -= 215;
  }

  //

  //
  rightPopular(): void {
    document.getElementById('scroll-popular').scrollLeft += 215;
  }

  leftPopular(): void {
    document.getElementById('scroll-popular').scrollLeft -= 215;
  }
  //

}



