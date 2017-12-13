// Angular general imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular module imports

// Local app imports
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
