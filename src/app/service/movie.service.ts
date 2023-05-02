import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Brookes Imports 
import { Observable, concat, defer, map, of, tap } from 'rxjs';
import { Movie, Result, genre } from '../interfaces/movie';
import { environment } from 'src/environments/environment.development';
import { Friends } from '../interfaces/friends';
// 



@Injectable({
	providedIn: 'root'
})
export class MovieService {
//PRIVATE
	private apikey: string = environment?.apikeys?.moviesdatabase ?? "";
	private urlbase: string = "https://moviesdatabase.p.rapidapi.com";
	private headers: { [header: string]: string | string[]; } = {
		"X-RapidAPI-Key": this.apikey,
		"X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
		"content-type": "application/octet-stream"
	}

//PUBLIC
	genresCache: genre[] = [ null, "Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film-Noir", "Game-Show", "History", "Horror", "Music", "Musical", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western" ]


	constructor(
		private http: HttpClient
	) { }

	browseMovies(searchText: string): Observable<Result> {
		const alteredText = searchText.replace(/\s/g, '+');
		return this.http.get<Result>(`https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids`).pipe(
			map((response: any) => response['games']
			)
		)
	}


	search(input: string) {
		//                                                      v-url paramater pollution avoidance
		const url = this.urlbase + "/titles/search/title/%7B" + encodeURIComponent(input) + "%7B";

		return this.http.get<Result>(url, {
			headers: this.headers,
			params: { exact: "false" }
		})
	}

	getGenres(): Observable<genre[]> {
		const url = this.urlbase + "/titles/utils/genres";

		let returnObservable =
		concat( //concat + async pipe => "The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted. When a new value is emitted, the async pipe marks the component to be checked for changes."

			//first, get the current cache
			defer(() => of(this.genresCache)),

			//then, get the actual values
			this.http.get<{results: genre[]}>(url, {
				headers: this.headers,
			}).pipe( //but...
				map<{results: genre[]}, genre[]>(input => { //unwrap the response
					return input.results;
				}),
				tap(newGenres => { //and update the cache
					this.genresCache = newGenres
				})
			)
		)

		return returnObservable;
	}

	boxOfficeWeekend(): Observable<Result>{
		const url = this.urlbase + "/titles";

		return this.http.get<Result>(url, {
			headers: this.headers,
			params: { list: "top_boxoffice_last_weekend_10", limit:20}
		})
	}

	top250(): Observable<Result>{
		const url = this.urlbase + "/titles";

		return this.http.get<Result>(url, {
			headers: this.headers,
			params: { list: "top_rated_250", sort: "year.decr"}
		})
	}


	// ---------------------- get movie by id, brookes movie details page ---------------------------------- //


	getById(movieId:string): Observable<Movie>{

		// const url = this.urlbase + "/titles/%7B" + encodeURIComponent(movieId) + "%7B";
		const url = this.urlbase + "/titles/x/titles-by-ids";
		return this.http.get<Result>(url, {
			headers: this.headers,
			params: { idsList: encodeURIComponent(movieId)}
		}).pipe(
			map<Result, Movie>(value => {
				return value.results[0]
			})
		)
	}

	getByIdDetailed(movieId:string): Observable<any>{

		const url = this.urlbase + "/titles/x/titles-by-ids";
		return this.http.get<Result>(url, {
			headers: this.headers,
			// params: { id:encodeURIComponent(movieId), info: "mini_info" }
			// params: { idsList: encodeURIComponent(movieId), info:"moreLikeThisTitles"}
			// params: { idsList: encodeURIComponent(movieId)}
			params: { idsList: encodeURIComponent(movieId), info:"plot"}
		}).pipe(tap(console.log))
		// .pipe(
		// 	map<Result, Movie>(value => {
		// 		return value.results[0]
		// 	})
		// )

	}

<<<<<<< HEAD
	getRecomendedFriends(movieId:string): Observable<Movie[]>{
		const url = this.urlbase + "/titles/x/titles-by-ids";
		return this.http.get<Result>(url, {
			headers: this.headers,
			// params: { id:encodeURIComponent(movieId), info: "mini_info" }
			// params: { idsList: encodeURIComponent(movieId), info:"moreLikeThisTitles"}
			// params: { idsList: encodeURIComponent(movieId)}
			params: { idsList: encodeURIComponent(movieId), info:"plot"}
		}).pipe(tap(console.log))
		// .pipe(
		// 	map<Result, Movie>(value => {
		// 		return value.results[0]
		// 	})
		// )
	}


=======
>>>>>>> d0c99608e4b3920d38b8d84d56a287b7dea87539
	// ---------------------------------------------------------------------------------------------------- // 



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
