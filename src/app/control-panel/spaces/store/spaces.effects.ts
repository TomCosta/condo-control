import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AngularFireDatabase } from 'angularfire2/database';

/** rxjs **/
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map } from 'rxjs/operators/map';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { catchError } from 'rxjs/operators/catchError';
import { switchMap } from 'rxjs/operators/switchMap';

import * as spacesActions from './spaces.actions';
import { Space } from '../../shared/space.model';
import { SpacesService } from '../spaces.service';


@Injectable()
export class SpacesEffects {
  private spacesList = 'spaces/';

  constructor(private actions$: Actions, private afs: AngularFireDatabase, private spacesService: SpacesService) {}

  // @Effect()
  // getSpaces$ = this.actions$.ofType(spacesActions.GET_SPACES_REQUEST)
  // .switchMap(payload => this.spacesService.getAllSpaces()
  //   .map(spaces => {
  //     return spaces.map(
  //         res => {
  //           const $key = res.payload.key;
  //           const space: Space = {$key, ...res.payload.val()};
  //           return space;
  //         }
  //   );
  //   })
  //   .map(res =>
  //     new spacesActions.GetSpacesSuccess(res)
  //   ));

  @Effect()
  getSpaces$ = this.actions$.ofType(spacesActions.GET_SPACES_REQUEST)
  .pipe(
    mergeMap(() => {
      return this.spacesService.getAllSpaces()
      .pipe(
        map((spaces) => {
          return this.spacesService.fromJson(spaces);
        })
      ).pipe(
        map((res) => {
          return new spacesActions.GetSpacesSuccess(res);
        }),
        catchError((error: Error) => {
            console.log('Erro:', error);
            return '';
          })
        );
      })
    );

  @Effect()
  addSpace$ = this.actions$.ofType(spacesActions.ADD_SPACE_REQUEST)
  .map((action: spacesActions.AddSpaceRequest) => {
    return action.payload;
  })
  .switchMap((space: Space) => {
    delete(space.$key);
    return fromPromise(this.afs.list(this.spacesList).push(space));
  })
  .map(() => new spacesActions.AddSpaceSuccess());

  @Effect()
  deleteSpace$ = this.actions$.ofType(spacesActions.DELETE_SPACE_REQUEST)
  .map((action: spacesActions.DeleteSpaceRequest) => {
    return action.payload;
  })
  .switchMap((key: string) => {
    return fromPromise(this.afs.list(this.spacesList).remove(key));
  })
  .map(() => new spacesActions.DeleteSpaceSuccess());

  @Effect()
  updateSpace$ = this.actions$.ofType(spacesActions.UPDATE_SPACE_REQUEST)
  .map((action: spacesActions.UpdateSpaceRequest) => {
    return action.payload;
  })
  .switchMap(payload => {
    delete(payload.updatedSpace.$key);
    return fromPromise(this.afs.list(this.spacesList).update(payload.$key, payload.updatedSpace));
  })
  .map(() => new spacesActions.UpdateSpaceSuccess());
}

