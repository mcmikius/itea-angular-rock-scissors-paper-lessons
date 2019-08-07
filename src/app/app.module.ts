import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {
  MatToolbarModule,
  MatGridListModule,
  MatBadgeModule,
  MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule
} from '@angular/material';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { GameComponent } from './game/game.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatBadgeModule,
    MatButtonModule,
    FontAwesomeModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


