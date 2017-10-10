import { Component, OnInit } from '@angular/core';
import {LoginService} from '../user/login.service';

@Component({
  selector: 'user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService: LoginService
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.userService.logOut();
  }

}
