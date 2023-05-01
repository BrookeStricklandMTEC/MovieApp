import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, Result } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/service/movie.service';
import { Router, ParamMap } from '@angular/router'; 

type section = {
  title: string,
  movies: Observable<Result>
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

    // this.nathansTestObservable$ = this.movieService.getGenres();

    // this.nathansTestObservable$ = this.movieService.boxOfficeWeekend();

    if(true){

      this.browseMovies.push({
        title: "this weekend:",
        movies: this.movieService.boxOfficeWeekend()
      })

      this.browseMovies.push({
        title: "top 250:",
        movies: this.movieService.top250()
      })

      // this.browseMovies.push({
      //   title: "scooby doo like movies:",
      //   movies: this.movieService.search("scooby doo")
      // })
    }
  }

  // go to movie details

    goToMovieDetails(movie: Movie){
      this.router.navigate(['./movieDetails', { movieId: movie.id}])
      // error for id ^ 
    }

  // movie added to favorites

  favorited(): void{
    
  }

}



