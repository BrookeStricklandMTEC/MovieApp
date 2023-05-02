import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() 
  movie : Movie;

  constructor(
    private router: Router,
  ){
  }

  

}
