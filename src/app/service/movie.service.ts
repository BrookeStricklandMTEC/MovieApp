import { Injectable } from '@angular/core';

// Brookes Imports 
  import { HttpClient } from '@angular/common/http';
  // import {enviornment}
  import { Observable, map } from 'rxjs';
  import { Movie } from '../interfaces/movie';
// 

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  browseMovies(searchText: string): Observable<Movie[]>{
    const alteredText = searchText.replace(/\s/g, '+');
    return this.http.get<Movie[]>(``).pipe(
        map((response : any) => response['games']
      )
    )
  }
}
