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
movies: any;

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

  // movie added to favorites

  favorited(): void{
    
  }


}



