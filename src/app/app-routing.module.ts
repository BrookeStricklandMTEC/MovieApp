import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieHomeComponent } from './components/movie-home/movie-home.component';
import { FavoriteMovieComponent } from './components/favorite-movie/favorite-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  // path '' : login / register? 
  { path: '', component: MovieHomeComponent },
  { path: 'favoriteMovie', component: FavoriteMovieComponent},

  // brooke working on movie details page
  {path: 'movieDetails', component: MovieDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
