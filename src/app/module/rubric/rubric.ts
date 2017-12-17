import { Component } from '@angular/core';
import { Globals } from '../../globals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rubric',
  templateUrl: 'rubric.html'
})

export class RubricComponent {
  constructor(
    private route: ActivatedRoute,
    private globals: Globals
  ) {}

  type = this.route.snapshot.paramMap.get('type');
  fullType = this.globals.typeToString(this.type);

}
