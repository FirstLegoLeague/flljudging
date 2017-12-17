// Angular general imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular module imports


// Local app imports
import { AppComponent } from './app.component';
import { Navbar } from './navbar.component';
import { Globals } from './globals'

@NgModule({
  declarations: [
    AppComponent,
    Navbar
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Globals
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
