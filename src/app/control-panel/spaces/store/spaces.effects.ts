import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AngularFireDatabase } from 'angularfire2/database';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

import * as SpacesActions from './spaces.actions';
import { Space } from '../../shared/space.model';
import { SpacesService } from '../store/spaces.service';
import { of } from 'rxjs/Observable/of';

@Injectable()
export class SpacesEffects {
  private spacesList = 'spaces/';

  constructor(private actions$: Actions, private afs: AngularFireDatabase, private spacesService: SpacesService) {}

  @Effect()
  getSpaces$ = this.actions$.ofType(SpacesActions.GET_SPACES_REQUEST)
  .switchMap(payload => this.afs.list(this.spacesList).snapshotChanges()
    .map(spaces => {
      return spaces.map(
          res => {
            const $key = res.payload.key;
            const space: Space = {$key, ...res.payload.val()};
            return space;
          }
    );
    })
    .map(res =>
      new SpacesActions.GetSpacesSuccess(res)
    ));

  @Effect()
  addSpace$ = this.actions$.ofType(SpacesActions.ADD_SPACE_REQUEST)
  .map((action: SpacesActions.AddSpaceRequest) => {
    return action.payload;
  })
  .switchMap((space: Space) => {
    delete(space.$key);
    return fromPromise(this.afs.list(this.spacesList).push(space));
  })
  .map(() => new SpacesActions.AddSpaceSuccess());

  @Effect()
  deleteSpace$ = this.actions$.ofType(SpacesActions.DELETE_SPACE_REQUEST)
  .map((action: SpacesActions.DeleteSpaceRequest) => {
    return action.payload;
  })
  .switchMap((key: string) => {
    return fromPromise(this.afs.list(this.spacesList).remove(key));
  })
  .map(() => new SpacesActions.DeleteSpaceSuccess());

  @Effect()
  updateSpace$ = this.actions$.ofType(SpacesActions.UPDATE_SPACE_REQUEST)
  .map((action: SpacesActions.UpdateSpaceRequest) => {
    return action.payload;
  })
  .switchMap(payload => {
    delete(payload.updatedSpace.$key);
    return fromPromise(this.afs.list(this.spacesList).update(payload.$key, payload.updatedSpace));
  })
  .map(() => new SpacesActions.UpdateSpaceSuccess());
}

