import * as SpacesActions from './spaces.actions';

import { Space } from '../../shared/space.model';

export interface FeatureState {
  spaces: State;
}

export interface State {
  spaces: Space[];
  addMode: boolean;
  loading: boolean;
}

const initialState: State = {
  spaces: [],
  addMode: false,
  loading: false
};

export function spacesReducers(state = initialState, action: SpacesActions.SpacesActions) {
  switch (action.type) {

    case SpacesActions.GET_SPACES_REQUEST:
    return Object.assign({}, state, {
      spaces: null,
      loading: true
  });
    case SpacesActions.GET_SPACES_SUCCESS:
    return Object.assign({}, state, {
      spaces: action.payload,
      loading: false
  });
    case SpacesActions.ADD_SPACE_REQUEST:
      return {
        ...state,
        ...action.payload,
        loading: true
      };
    case SpacesActions.ADD_SPACE_SUCCESS:
      return {
        ...state,
          loading: false
      };
    case SpacesActions.UPDATE_SPACE_REQUEST:
      return {
        ...state,
        ...action.payload,
        loading: true
      };

    case SpacesActions.UPDATE_SPACE_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case SpacesActions.DELETE_SPACE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SpacesActions.DELETE_SPACE_SUCCESS:
      return {
        ...state,
          // spaces: [...state],
          loading: false
      };
    case SpacesActions.SWITCH_ADD_MODE:
      return {
        ...state,
        addMode: action.payload
      };
      default:
        return state;
  }
}
