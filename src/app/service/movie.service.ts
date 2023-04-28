import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Brookes Imports 
  // import {enviornment}
  import { Observable, map } from 'rxjs';
  import { Movie } from '../interfaces/movie';
// 
import { environment } from '../../environments/environment';



@Injectable({
	providedIn: 'root'
})
export class MovieService {

	private apikey: string = environment?.apikeys?.moviesdatabase ?? "";
	private urlbase: string = "https://moviesdatabase.p.rapidapi.com";
	private headers: { [header: string]: string | string[]; } = {
		"X-RapidAPI-Key": this.apikey,
		"X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
		"content-type": "application/octet-stream"
	}

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


	search(input: string) {
		const url = this.urlbase + "/titles/search/title/%7B" + encodeURIComponent(input) + "%7B"


		return this.http.get(url,{
			headers: this.headers,
			params: {exact: "false"}
		})
	}

	/*
	get(
		url: string,
		options: {
			headers?: HttpHeaders | { [header: string]: string | string[]; } | undefined;
			observe: "events"; context?: HttpContext | undefined;
			params?: HttpParams | { ...; } | undefined;
			reportProgress?: boolean | undefined;
			responseType?: "json" | undefined;
			withCredentials?: boolean | undefined;
	}): Observable<HttpEvent<Object>>
	*/
}
