import { Component, OnInit, Input } from '@angular/core';

import { Space } from '../../../shared/space.module';

@Component({
  selector: 'app-space-item',
  templateUrl: './space-item.component.html',
  styleUrls: ['./space-item.component.scss']
})
export class SpaceItemComponent implements OnInit {
  @Input() space: Space;
  constructor() { }

  ngOnInit() {
  }

}
