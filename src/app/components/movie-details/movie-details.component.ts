import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { Image, Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/service/movie.service';
import { SlideInterface } from 'src/app/interfaces/slide.interface';
import { Plot } from 'src/app/interfaces/movie-metadata';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  movie: Movie | undefined
  plot: Plot | undefined
  imageArray: Image[] 

  constructor(
    private movieService: MovieService,
    private route:  ActivatedRoute,
  ) {}

  slides: SlideInterface[] = [
  //   { url: '', title: 'movie1'},
  //   { url: '', title: 'movie2'},
  //   { url: '../../../assets/poster4.jpg', title: 'movie3'},
  //   { url: '../../../assets/poster5.jpg', title: 'movie4'},
  
  ];

  ngOnInit(){
    this.route.paramMap.pipe(
      switchMap(params => {
        return this.movieService.getById(params.get('id'))
      }),
      tap(console.log), 
      tap(movieResult => this.movie = movieResult),
  
    ).subscribe()

    this.route.paramMap.pipe(
      switchMap(params => {
        return this.movieService.doItForThePlot(params.get('id'))
      }),
      tap(console.log), 
      tap(movieResult => this.plot = movieResult),
  
    ).subscribe()

    
     this.movieService.getIdMainImages(this.movie.id).subscribe(images => this.imageArray = images)

    // for (let x = 0; x < this.imageArray.length; x++){
    //   const element =  {url: this.imageArray[x].url, title: this.imageArray[x].id }
    //   document.querySelector('.slide').innerHTML += element; 
    //   this.slides.push(element)
      
    // }
    
}

//   <div class="imagesContainer" *ngFor="let image of this.images$ | async">
//    <img [src]="image.url" [alt]="'image of' + image.caption.plainText">
//   </div>

}
