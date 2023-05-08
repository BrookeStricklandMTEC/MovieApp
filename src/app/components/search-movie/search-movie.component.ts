import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { Observable, switchMap, tap } from 'rxjs';
import { Result } from 'src/app/interfaces/movie';


@Component({
  selector: 'app-register',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit{
  searchResult: Observable<Result>;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(){
    this.route.paramMap.pipe(
      tap(console.log),
      tap(params => {
        this.searchResult = this.movieService.search(params.get('id'))
      })

    ).subscribe()
  }
}
