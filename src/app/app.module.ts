import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuessComponent } from './components/guess/guess.component';
import { GuessListComponent } from './components/guess-list/guess-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GuessComponent,
    GuessListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
