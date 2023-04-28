import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import 
import { Observable, map } from 'rxjs';
// import { Movie} 

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

    browseMovies(){
      
    }

}
