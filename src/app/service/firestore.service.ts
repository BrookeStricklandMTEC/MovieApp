import { Injectable } from '@angular/core';
import { Observable, bindCallback, map, tap } from 'rxjs';


import { AngularFireAuth } from '@angular/fire/compat/auth';
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";//only for typing
import * as fire from "firebase/firestore";



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private firebaseConfig = {
    apiKey: "AIzaSyBT1t1pwnwGYfINku99IbxDIE_-ABJg5rU",
    authDomain: "movieapp-81a47.firebaseapp.com",
    projectId: "movieapp-81a47",
    storageBucket: "movieapp-81a47.appspot.com",
    messagingSenderId: "1064192319400",
    appId: "1:1064192319400:web:6311b71641a9be75e7479d"
  };
  private app: (ReturnType<typeof initializeApp>);
  private db: (ReturnType<typeof fire.getFirestore>)


  toolBarAuthString: Observable<string> | undefined;
  currentUser: firebase.User;


  constructor(
    public auth: AngularFireAuth
  ) {
    this.app = initializeApp(this.firebaseConfig);
    console.log(this.auth);
    this.db = fire.getFirestore(this.app);

    // this.auth.onAuthStateChanged(this.authChange);
    this.toolBarAuthString = this.auth.authState.pipe(
      map(user => user.displayName ?? "Sign in"),
    )
    this.auth.authState.pipe(
      tap(user => this.currentUser = user)
    ).subscribe()

  };

  SignIn(email, password) {
    return this.auth
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      window.alert(error.message);
    });
  }
  authChange(user):void{

  }


  //OLD FIRESTORE SETUP
  /*

  likeMovie(movieId: string){
    if(this.currentUser?.displayName){
      console.error("cannot like because you are not logged in");
      return;
    }
    console.log("liking as " + this.currentUser.uid);
    addDoc(collection(this.db, "favorited"), {userId: this.currentUser.uid, movieId: movieId})
    .then(result => {
      console.log("succsessful like");
      console.log(result);
    }).catch(result => {
      console.log("unsuccsessful like");
      console.error(result);
    })
  }

  getlikedMovies(){
    query(collection(this.db, "favorited"), where("userId", "==", this.currentUser.uid))
  }
  */
  likeMovie(movieId: string){
    if(!this.currentUser?.displayName){
      console.error("cannot like because you are not logged in");
      return;
    }
    console.log("liking as " + this.currentUser.uid);

    let docRef = fire.doc(this.db,"favorited2",this.currentUser.uid);


    fire.updateDoc(docRef, {likes:  fire.arrayUnion(movieId)});
    fire.updateDoc(docRef, {likes: fire.arrayRemove(movieId)});
  }



}


// pmi3QuOwFvSzlxqEMIYgatmU2DC3
// movieId:tt6718170