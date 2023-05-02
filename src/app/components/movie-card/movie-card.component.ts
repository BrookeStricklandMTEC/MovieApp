import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() 
  movie : Movie;
  movies: any; 

  constructor(
    private router: Router,
  ){
  }

  goToMovieDetails(movie: Movie){
    this.router.navigate(['./movieDetails', { movieId: movie.id}])
  }



  favorited(): void{

  }
}
