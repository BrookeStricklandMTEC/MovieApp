import { Component, Input } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Movie, Result } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  @Input() movies$ : Observable<Result> | undefined;
  movies: Movie[] | undefined;

  constructor(){

  }

  ngOnInit(){
    this.movies$?.pipe(
      tap(thing => this.movies = thing.results),
      tap(console.log)
    ).subscribe()
  }

  rightUpcoming(e:unknown): void {
    //@ts-ignore
    e.target.parentElement.previousSibling.scrollLeft += 215;
  }

  leftUpcoming(e:unknown): void {
    //@ts-ignore
    e.target.parentElement.nextSibling.scrollLeft -= 215;
  }


}
