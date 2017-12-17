import { Component } from '@angular/core';
import { Globals } from './globals';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class Navbar {
  constructor(private globals: Globals){
  }
}
