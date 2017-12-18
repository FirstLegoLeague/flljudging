// Angular general imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular (internal) module imports
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';

// Local app imports
import { HomeComponent } from './base/home';
import { NavComponent } from './base/navbar';
import { Globals } from './base/globals';

// Module imports
import { JudgingComponent } from './judging/judging';
import { SettingsComponent } from './settings/settings';
import { SettingsService } from './service/settings';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    JudgingComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Globals,
    SettingsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
