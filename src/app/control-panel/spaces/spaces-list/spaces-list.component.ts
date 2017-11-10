import { Component, OnInit, Input } from '@angular/core';

import { Space } from './../../shared/space.model';
import { SpacesService } from '../spaces.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-spaces-list',
  templateUrl: './spaces-list.component.html',
  styleUrls: ['./spaces-list.component.scss']
})
export class SpacesListComponent implements OnInit, OnDestroy {
  spaces: Space[] = [];
  private addMode = false;

  subscription: Subscription;

  constructor(private spacesService: SpacesService) { }

  ngOnInit() {
    this.subscription = this.spacesService.addModeActivated
    .subscribe(
      (addMode: boolean) => {
        this.addMode = addMode;
      }
    );

    this.subscription = this.spacesService.spacesChanged
    .subscribe(
      (spaces: Space[]) => {
        this.spaces = spaces;
      }
    );
  this.spaces = this.spacesService.getSpaces();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  enableAddMode() {
    // this.addMode = true;
    this.spacesService.addModeActivated.next(true);
  }
}
