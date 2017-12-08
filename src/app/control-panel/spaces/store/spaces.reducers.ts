import * as SpacesActions from './spaces.actions';

import { Space } from '../../shared/space.model';

export interface FeatureState {
  spaces: State;
}

export interface State {
  spaces: Space[];
  addMode: boolean;
  loading: boolean;
  selectedItem: string;
  updatedItem: {
    name: string;
    picture: string;
  };
}

const initialState: State = {
  spaces: [],
  addMode: false,
  loading: false,
  selectedItem: null,
  updatedItem: {
    name: '',
    picture: ''
  }
};

export function spacesReducers(state = initialState, action: SpacesActions.SpacesActions) {
  switch (action.type) {

    case SpacesActions.UPDATE_FORM:
    return {
      ...state,
      updatedItem: action.payload
    };

    case SpacesActions.SELECT_SPACE:
    return {
      ...state,
      selectedItem: action.payload
    };

    case SpacesActions.GET_SPACES_REQUEST:
    return {
      ...state,
      loading: true
  };
    case SpacesActions.GET_SPACES_SUCCESS:
    return {
      ...state,
      spaces: action.payload,
      loading: false
  };
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
        loading: false,
        selectedItem: null
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
    case SpacesActions.CLEAR_SELECTION:
      return {
        ...state,
        selectedItem: null,
        updatedItem: {
          name: '',
          picture: ''
        }
      };
      default:
        return state;
  }
}
