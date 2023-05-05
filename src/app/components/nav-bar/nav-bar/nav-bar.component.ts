import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  search= "";

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  route() {
    this.router.navigate(['search', this.search]);
  }
}
