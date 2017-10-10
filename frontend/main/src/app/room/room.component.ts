import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  user: firebase.User;
  username : string;
  constructor(public authService: AuthService, private router: Router) {
  }

  updateUser(){
  if (this.user) {
    // User is signed in
    this.user.updateProfile({
        displayName: this.username,
        photoURL : ""
    })
  }
}

  getDisplayName() {
    if (this.user) {
      return this.user.displayName;
    } else {
    return "";
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  authStateChanged(firebaseUser) {
    if (firebaseUser) {
      console.log(firebaseUser, firebaseUser.displayName);

    }
    else {
      console.log("not logged")
    }
  }

  ngOnInit() {
    this.authService.user.do((user) => {
      console.log(user);
      this.user = user;
    }).subscribe();
  }

}