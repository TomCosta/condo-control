import { Component, OnInit, Input } from '@angular/core';

import { Space } from './../../shared/space.module';

@Component({
  selector: 'app-spaces-list',
  templateUrl: './spaces-list.component.html',
  styleUrls: ['./spaces-list.component.scss']
})
export class SpacesListComponent implements OnInit {

  @Input() spaces: Space[] = [
    new Space('Churrasqueira', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
    new Space('Churrasqueira2', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
    new Space('Churrasqueira3', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
    new Space('Churrasqueira3', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
    new Space('Churrasqueira3', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
    new Space('Churrasqueira3', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
    new Space('Churrasqueira4', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
