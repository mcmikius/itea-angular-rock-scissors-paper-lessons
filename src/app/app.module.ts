import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule, MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule
} from "@angular/material";
import { GamePageComponent } from './components/game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
      MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
