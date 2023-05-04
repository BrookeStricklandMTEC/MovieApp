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
    if(true){

      // this.browseMovies.push({
      //   title: "batman like movies:",
      //   movies: this.movieService.search("batman")
      // })
      this.browseMovies.push({
        title: "recent:",
        movies: this.movieService.boxOfficeWeekend()
      })
      this.browseMovies.push({
        title: "top 250:",
        movies: this.movieService.top250()
      })
    }

    // this.nathansTestObservable$ = this.movieService.getGenres();
    // this.nathansTestObservable$ = this.movieService.getByIdDetailsTester("tt6718170");
  }
}



