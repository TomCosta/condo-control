import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Space } from './../../shared/space.model';
import { SpacesService } from '../spaces.service';
import * as fromSpaces from '../store/spaces.reducers';
import * as spaceActions from '../store/spaces.actions';

@Component({
  selector: 'app-spaces-list',
  templateUrl: './spaces-list.component.html',
  styleUrls: ['./spaces-list.component.scss']
})

export class SpacesListComponent implements OnInit, OnDestroy {
  private addMode: boolean;

  spacesState: Observable<fromSpaces.State>;
  subscription: Subscription;

  constructor(private store: Store<fromSpaces.FeatureState>) {
    this.spacesState = this.store.select('spaces');
  }
ngOnInit() {
    this.store.dispatch(new spaceActions.GetSpacesRequest());

    this.subscription = this.store.select('spaces')
    .subscribe(
      data => {
        if (data.addMode) {
          this.addMode = data.addMode;
        } else {
          this.addMode = false;
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  enableAddMode() {
    this.store.dispatch(new spaceActions.SwitchAddMode(true));
  }
}
