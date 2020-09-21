import * as types from '../types';

const initialState = {
  films: null,
  status: null,
  deleteStatus: null,
  setFilmStatus: null,
  details: null,
  detailsStatus: null,
  detailsError: null
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILMS_LIST: {
      const { films } = action.payload;
      return {
        ...state,
        films
      };
    };
    case types.FILMS_STATUS: {
      const { status } = action.payload;
      return {
        ...state,
        status
      };
    };
    case types.DELETE_STATUS: {
      const { status } = action.payload;
      return {
        ...state,
        deleteStatus: status
      };
    };
    case types.SET_FILM_STATUS: {
      const { status } = action.payload;
      return {
        ...state,
        setFilmStatus: status
      };
    };
    case types.DETAILS: {
      const { film } = action.payload;
      return {
        ...state,
        details: film
      };
    };
    case types.DETAILS_STATUS: {
      const { status } = action.payload;
      return {
        ...state,
        detailsStatus: status
      };
    };
    case types.DETAILS_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        detailsError: error
      }
    };
    case types.CLEAR_DETAILS: {
      return {
        ...state,
        details: null
      }
    };
    default: return state;
  };
};
