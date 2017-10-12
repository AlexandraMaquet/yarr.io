import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  register = false;

  constructor(public authService: AuthService, private router: Router) {}

  loginEmail() {
    this.router.navigate(['/email']);
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

  loginFacebook() {
    this.authService.loginFacebook();
  }

  loginAnonymous(){
    this.authService.loginAnonymous();
  }

  signup() {
    this.router.navigate(['/signup']);
  }

  ngOnInit() {
  }

}
