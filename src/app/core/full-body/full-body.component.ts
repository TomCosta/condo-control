import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-body',
  templateUrl: './full-body.component.html',
  styleUrls: ['./full-body.component.scss']
})
export class FullBodyComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.route.navigate(['control-panel']);
  }

}
