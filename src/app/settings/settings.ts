import { Component } from '@angular/core';
import { Globals } from '../base/globals';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from '../service/settings';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})

export class SettingsComponent {
  constructor(
    private route: ActivatedRoute,
    private globals: Globals,
    private config: SettingsService
  ) { }

  
}
