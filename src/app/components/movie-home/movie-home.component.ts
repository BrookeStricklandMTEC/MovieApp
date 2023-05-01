import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/service/movie.service';
import { Router, ParamMap } from '@angular/router'; 

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
    private movieService: MovieService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.browseMovies.push({
      title: "scooby doo like movies:",
      movies: this.movieService.search("scooby doo")
    })

    // this.nathansTestObservable$ = this.movieService.getGenres();
  }

  // go to movie details

    goToMovieDetails(movie: Movie){
      this.router.navigate(['./movieDetails', { movieId: movie.id}])
      // error for id ^ 
    }

  // movie added to favorites

  favorited(): void{
    
  }


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



