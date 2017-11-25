import { Action } from '@ngrx/store';
import { FormGroupDirective } from '@angular/forms';

import { Space } from '../../shared/space.model';

// export const GET_SPACE          = 'GET_SPACE';
// export const GET_SPACE_SUCCESS  = 'GET_SPACE_SUCCESS';

export const SELECT_SPACE = 'SELECT_SPACE';
export const SELECT_SPACE_SUCCESS = 'SELECT_SPACE_SUCCESS';

export const UPDATE_FORM = 'UPDATE_FORM';
// export const UPDATE_FORM_SUCCESS = 'UPDATE_FORM_SUCCESS';


export const GET_SPACES_REQUEST = 'GET_SPACES_REQUEST';
export const GET_SPACES_SUCCESS = 'GET_SPACES_SUCCESS';

export const ADD_SPACE_REQUEST  = 'ADD_SPACE_REQUEST';
export const ADD_SPACE_SUCCESS  = 'ADD_SPACE_SUCCESS';

export const UPDATE_SPACE_REQUEST = 'UPDATE_SPACE_REQUEST';
export const UPDATE_SPACE_SUCCESS = 'UPDATE_SPACE_SUCCESS';

export const DELETE_SPACE_REQUEST = 'DELETE_SPACE_REQUEST';
export const DELETE_SPACE_SUCCESS = 'DELETE_SPACE_SUCCESS';

export const SWITCH_ADD_MODE    = 'SWITCH_ADD_MODE';

export class GetSpacesRequest implements Action {
  readonly type = GET_SPACES_REQUEST;

}

export class SelectSpace implements Action {
  readonly type = SELECT_SPACE;

  constructor(public payload: string) {}

}

export class GetSpacesSuccess implements Action {
  readonly type = GET_SPACES_SUCCESS;

  constructor(public payload: Space[]) {}
}

export class AddSpaceRequest implements Action {
  readonly type = ADD_SPACE_REQUEST;

  constructor(public payload: Space) {}
}

export class AddSpaceSuccess implements Action {
  readonly type = ADD_SPACE_SUCCESS;

  constructor() {}
}

export class UpdateSpaceRequest implements Action {
  readonly type = UPDATE_SPACE_REQUEST;

  constructor(public payload: {$key: string, updatedSpace: Space}) {}
}

export class UpdateSpaceSuccess implements Action {
  readonly type = UPDATE_SPACE_SUCCESS;

}

export class DeleteSpaceRequest implements Action {
  readonly type = DELETE_SPACE_REQUEST;

  constructor(public payload: string) {}
}

export class DeleteSpaceSuccess implements Action {
  readonly type = DELETE_SPACE_SUCCESS;

  constructor() {}
}

export class SwitchAddMode implements Action {
  readonly type = SWITCH_ADD_MODE;

  constructor(public payload: boolean) {}
}


export class UpdateForm implements Action {
  readonly type = UPDATE_FORM;

  constructor(public payload: {name: string, picture: string}) {}

}

export type SpacesActions =
  UpdateForm |
  SelectSpace |
  AddSpaceRequest |
  AddSpaceSuccess |
  GetSpacesRequest |
  GetSpacesSuccess |
  UpdateSpaceRequest |
  UpdateSpaceSuccess |
  DeleteSpaceRequest |
  DeleteSpaceSuccess |
  SwitchAddMode;
