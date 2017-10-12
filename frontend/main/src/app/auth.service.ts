import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!');
        this.router.navigate(['/game'])
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigate(['/game'])
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  loginGoogle() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigate(['/game'])
      })
      .catch(function (error) {
        alert(error + " Please try again")
      })
  }

  loginFacebook() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigate(['/game'])
      })
      .catch(function (error) {
        alert(error + " Please try again")
      })
  }

  loginAnonymous() {
    this.firebaseAuth.auth.signInAnonymously()
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigate(['/game'])
      })
      .catch(function (error) {
        alert(error + " Please try again")
      })
  }
}