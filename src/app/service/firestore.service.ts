import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { AngularFireAuth } from '@angular/fire/compat/auth';



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


  constructor(
    public afAuth: AngularFireAuth
  ) {
    this.app = initializeApp(this.firebaseConfig);
  };

  SignIn(email, password) {
    return this.afAuth
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      window.alert(error.message);
    });
  }
}
