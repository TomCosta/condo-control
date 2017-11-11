import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Space } from './../../shared/space.model';
import { SpacesService } from '../spaces.service';
import * as fromSpaces from '../store/spaces.reducers';

@Component({
  selector: 'app-spaces-list',
  templateUrl: './spaces-list.component.html',
  styleUrls: ['./spaces-list.component.scss']
})

export class SpacesListComponent implements OnInit, OnDestroy {
  // spacesState: Observable<fromSpaces.State>; UTILIZAR LOGO QUE CORRIGIR NGRX
  spaces: Space[];

  private addMode = false;

  subscription: Subscription;

  constructor(private spacesService: SpacesService,
              // private store: Store<fromSpaces.FeatureState>
            ) { }

  ngOnInit() {
    // this.spacesState = this.store.select('spaces'); UTILIZAR LOGO QUE CORRIGIR NGRX

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
