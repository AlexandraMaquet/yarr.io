import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { AuthGuard } from './authguard.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routes } from './app.routes';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { GameComponent } from './game/game.component';
import { AngularFireDatabase} from 'angularfire2/database';
import * as io from 'socket.io-client';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    routes
  ],
  providers: [AuthGuard, AuthService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
