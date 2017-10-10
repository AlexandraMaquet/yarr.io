import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) {}
  
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
    console.log("signed up")
    this.router.navigate(['/room']);
  }

  backtologin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
