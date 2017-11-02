import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  toggler = true;
  constructor() { }

  onClick() {
    this.toggler = !this.toggler;
  }
  ngOnInit() {
    // this.toggler = false;
  }

}
