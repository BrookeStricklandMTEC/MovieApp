import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieHomeComponent } from './components/movie-home/movie-home.component';
import { FavoriteMovieComponent } from './components/favorite-movie/favorite-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: MovieHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favoriteMovie', component: FavoriteMovieComponent},

  // brooke working on movie details page
  {path: 'movieDetails:movieId', component: MovieDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
