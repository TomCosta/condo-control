import { Component, OnInit } from '@angular/core';
import { SpacesService } from './spaces.service';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.scss'],
  providers: [SpacesService]
})
export class SpacesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
