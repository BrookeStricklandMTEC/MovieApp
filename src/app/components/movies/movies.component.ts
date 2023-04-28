import { Component, Input } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  @Input() movies$ : Observable<Movie[]> | undefined;
  movies: Movie[] | undefined;

  constructor(){

  }

  ngOnInit(){
    this.movies$?.pipe(
      tap(thing => this.movies = thing),
      tap(console.log)
    ).subscribe()
  }

}
