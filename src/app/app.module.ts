import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Brook's imports:
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { FavoriteMovieComponent } from './components/favorite-movie/favorite-movie.component';
import { MovieHomeComponent } from './components/movie-home/movie-home.component';
import { MoviesComponent } from './components/movies/movies.component';


//Nathan's imports
import { HttpClientModule } from "@angular/common/http"


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FavoriteMovieComponent,
    MovieHomeComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Nathan's imports
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
