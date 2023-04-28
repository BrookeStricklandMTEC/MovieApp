import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Brookes Imports 
  // import {enviornment}
  import { Observable, map } from 'rxjs';
  import { Movie } from '../interfaces/movie';
import { environment } from 'src/environments/environment.development';
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
    return this.http.get<Movie[]>(`https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids`).pipe(
        map((response : any) => response['games']
      )
    )
  }
 
}
