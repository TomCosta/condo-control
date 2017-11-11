import { Action } from '@ngrx/store';

import { Space } from '../../shared/space.model';

export const ADD_SPACE = 'ADD_SPACE';
export const UPDATE_SPACE = 'UPDATE_SPACE';
export const DELETE_SPACE = 'DELETE_SPACE';

export class AddSpace implements Action {
  readonly type = ADD_SPACE;

  constructor(public payload: Space) {}
}

export class UpdateSpace implements Action {
  readonly type = UPDATE_SPACE;

  constructor(public payload: {index: number, updatedSpace: Space}) {}
}

export class DeleteSpace implements Action {
  readonly type = DELETE_SPACE;

  constructor(public payload: number) {}
}

export type SpacesActions = AddSpace | UpdateSpace | DeleteSpace;
