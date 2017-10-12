import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { AuthGuard } from './authguard.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { GameComponent } from './game/game.component';


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'email', component: EmailComponent },
    { path: 'game', component: GameComponent, canActivate: [AuthGuard]},
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);