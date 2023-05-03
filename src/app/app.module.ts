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
import { MatIcon } from '@angular/material/icon';



// Nathan's imports
import { HttpClientModule } from "@angular/common/http"

// Gabriel's imports
import { MatIconModule } from '@angular/material/icon';
import { MovieCardComponent } from './components/movie-card/movie-card.component'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.development';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,

    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
  ],
  tosUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  privacyPolicyUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FavoriteMovieComponent,
    MovieHomeComponent,
    MoviesComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    LoginComponent,
    SearchMovieComponent,
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
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
