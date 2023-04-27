import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieHomeComponent } from './components/movie-home/movie-home.component';
import { FavoriteMovieComponent } from './components/favorite-movie/favorite-movie.component';

const routes: Routes = [
  // path '' : login / register? 
  { path: '', component: MovieHomeComponent },
  { path: 'favoriteMovie', component: FavoriteMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
