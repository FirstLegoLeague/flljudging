import { Component } from '@angular/core';
import { Globals } from './globals';

@Component({
  selector: 'home',
  templateUrl: './home.html'
})

export class HomeComponent {
  constructor(private globals: Globals){
  }
}
