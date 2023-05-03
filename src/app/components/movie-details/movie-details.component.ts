import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route:  ActivatedRoute,
  ) {}

  // carosel

  rightUpcoming(e:unknown): void {
    //@ts-ignore
    e.target.parentElement.previousSibling.scrollLeft += 215;
  }

  leftUpcoming(e:unknown): void {
    //@ts-ignore
    e.target.parentElement.nextSibling.scrollLeft -= 215;
  }

  //

  ngOnInit(){
    this.route.queryParams.pipe(
      switchMap(params => {
        return this.movieService.getById(params["movieId"])
      }),
      tap(movieResult => this.movie = movieResult)
    )
   console.log(this.movie)
  }

}
