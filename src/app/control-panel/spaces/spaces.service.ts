import { Space } from '../shared/space.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpacesService {

    spacesChanged = new Subject<Space[]>();
    addModeActivated = new Subject<boolean>();

    private spaces: Space[] = [
      new Space('Churrasqueira', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
      new Space('Churrasqueira2', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
      new Space('Churrasqueira3', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
      new Space('Churrasqueira3', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
      new Space('Churrasqueira3', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
      new Space('Churrasqueira3', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
      new Space('Churrasqueira4', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg')
  ];


  // SETs and GETs

  getSpaces() {
    return this.spaces.slice();
  }

  getSpace(index: number) {
    return this.spaces[index];
  }

  updateSpace(space: Space, index: number) {
    this.spaces[index] = space;
    this.spacesChanged.next(this.getSpaces());
  }

  deleteSpace(index: number) {
    this.spaces.splice(index, 1);
    this.spacesChanged.next(this.getSpaces());
  }

  addSpace(newSpace: Space) {
    this.spaces.push(newSpace);
    this.spacesChanged.next(this.getSpaces());
    this.addModeActivated.next(false);
  }
}

