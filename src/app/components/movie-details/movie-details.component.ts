import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/service/movie.service';
import { SlideInterface } from 'src/app/interfaces/slide.interface';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  movie: Movie | undefined

  constructor(
    private movieService: MovieService,
    private route:  ActivatedRoute,
  ) {}

  slides: SlideInterface[] = [
    { url: '../../../assets/img2.jpg', title: 'avengers2'},
    { url: '../../../assets/img3.jpg', title: 'avengers3'},
    { url: '../../../assets/detail-test.webp', title: 'avengers1'},
  ];

  ngOnInit(){
    this.route.paramMap.pipe(
      switchMap(params => {
        return this.movieService.getById(params.get('id'))
      }),
      tap(console.log), 
      tap(movieResult => this.movie = movieResult),
  
    ).subscribe()
  }
}
