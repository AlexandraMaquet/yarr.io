import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  backtologin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
