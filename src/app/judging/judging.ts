import { Component } from '@angular/core';
import { Globals } from '../base/globals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'judging',
  templateUrl: 'judging.html'
})

export class JudgingComponent {
  constructor(
    private route: ActivatedRoute,
    private globals: Globals
  ) {}

  type = this.route.snapshot.paramMap.get('type');
  fullType = this.globals.typeToString(this.type);

}
