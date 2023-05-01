import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Brook's imports:
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { FavoriteMovieComponent } from './components/favorite-movie/favorite-movie.component';
import { MovieHomeComponent } from './components/movie-home/movie-home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MatCardModule } from '@angular/material/card';


// Nathan's imports
import { HttpClientModule } from "@angular/common/http"

// Gabriel's imports
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    //Brooke's Imports
    MatCardModule,

    //Nathan's imports
    HttpClientModule,

    //Gabriel's Imports
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
