import { Component } from '@angular/core';
import { Globals } from './base/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private globals: Globals){
  }
}
