import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import * as socketIo from 'socket.io-client';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })
export class AppComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
    console.log("signed up")
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';   
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit():void {
    const socket = socketIo('http://localhost:3000');

    socket.on('hello', (data) => console.log(data));

  }
}