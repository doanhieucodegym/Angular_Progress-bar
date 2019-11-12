import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PorgressBarComponent } from './progress-bar/porgress-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    PorgressBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
