import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserModule} from './user/user.module';

import {NotifyModule} from 'notify-angular';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {AuthGuardService} from './user/auth-guard.service';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';

import {ResourceModule} from '@tsmean/resource';

const appRoutes: Routes = [
  { path: '', component: LandingComponent, canActivate: [AuthGuardService]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService
  ]
})
export class AppRoutingModule { }


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ResourceModule.forRoot('http://demo.tsmean.com:4242/api/v1'),
    AppRoutingModule,
    NotifyModule.forRoot(),
    UserModule.forRoot('http://demo.tsmean.com:4242/api/v1'),

  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
