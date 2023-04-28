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
export class MovieHomeComponent{

  browseMovies: section[] = [];

  constructor(
    private movieService: MovieService
  ){

  }

  ngOnInit(){
    this.browseMovies.push({
      title: "scooby doo like movies:",
      movies: this.movieService.search("scooby doo")
    })
  }


  leftScroll(){

  }

  rightScroll(){
    
  }



}
