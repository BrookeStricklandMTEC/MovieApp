import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  movie: Movie | undefined;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route:  ActivatedRoute,
  ) {}

  ngOnInit(){

    this.route.queryParams.pipe(
      switchMap(params => {
        return this.movieService.getById(params["MovieId"])
      }),
      tap(movieResult => this.movie = movieResult)
    )

  }
}
