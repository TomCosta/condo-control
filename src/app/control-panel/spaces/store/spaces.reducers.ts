import * as SpacesActions from './spaces.actions';

import { Space } from '../../shared/space.model';

export interface FeatureState {
  spaces: State;
}

export interface State {
  spaces: Space[];
}

const initialState: State = {
  spaces: [
    new Space('Churrasqueira', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
    new Space('Churrasqueira2', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
    new Space('Churrasqueira3', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
    new Space('Churrasqueira3', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
    new Space('Churrasqueira3', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
    new Space('Churrasqueira3', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg'),
    new Space('Churrasqueira4', 'https://br.habcdn.com/files/dynamic_content/churrasqueira-3-em-1-1300623_big.jpg')
  ]
};

export function spacesReducer(state = initialState, action: SpacesActions.SpacesActions) {
  switch (action.type) {
    case SpacesActions.ADD_SPACE:
      return {
        ...state,
          spaces: [...state.spaces, action.payload]
      };
    case SpacesActions.UPDATE_SPACE:
      const space = state.spaces[action.payload.index];
      const updatedRecipe = {
        ...space,
        ...action.payload.updatedSpace
      };
      const spaces = [...state.spaces];
      spaces[action.payload.index] = updatedRecipe;
      return {
        ...state,
          spaces: spaces
      };
    case SpacesActions.DELETE_SPACE:
      const deletedSpaces = [state.spaces];
      deletedSpaces.splice(action.payload, 1);
      return {
        ...state,
          spaces: deletedSpaces
      };
      default:
        return state;
  }
}
