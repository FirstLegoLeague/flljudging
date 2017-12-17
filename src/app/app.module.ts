// Angular general imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular (internal) module imports
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';

// Local app imports
import { HomeComponent } from './home.component';
import { NavComponent } from './navbar.component';
import { Globals } from './globals';

// Module imports
import { RubricComponent } from './module/rubric/rubric';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RubricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Globals
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
