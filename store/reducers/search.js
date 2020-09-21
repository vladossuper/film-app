import * as types from '../types';

const initialState = {
  searchResult: null
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH: {
      return {
        ...state,
        searchResult: action.payload
      }
    }
    default: {
      return state;
    }
  }
}