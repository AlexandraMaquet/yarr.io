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
import { RoomComponent } from './room/room.component';
import { routes } from './app.routes';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { GameComponent } from './game/game.component';
import { PongComponent } from './pong/pong.component';
import { AngularFireDatabase} from 'angularfire2/database';
import * as io from 'socket.io-client';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomComponent,
    SignupComponent,
    EmailComponent,
    GameComponent,
    PongComponent
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
