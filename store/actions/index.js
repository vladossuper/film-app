import * as types from '../types';

export const filmStatus = status => {
  return {
    type: types.FILMS_STATUS,
    payload: status
  };
};

export const filmList = list => {
  return {
    type: types.FILMS_LIST,
    payload: list
  };
};

export const setFilmStatus = status => {
  return {
    type: types.SET_FILM_STATUS,
    payload: status
  };
};

export const deleteStatus = status => {
  return {
    type: types.DELETE_STATUS,
    payload: status
  };
};

export const uploadStatus = status => {
  return {
    type: types.UPLOAD_STATUS,
    payload: status
  };
};

export const detailsStatus = status => {
  return {
    type: types.DETAILS_STATUS,
    payload: status
  };
};

export const details = details => {
  return {
    type: types.DETAILS,
    payload: details
  };
};

export const detailsError = error => {
  return {
    type: types.DETAILS_ERROR,
    payload: error
  };
};

export const clearDetails = () => {
  return {
    type: types.CLEAR_DETAILS
  }
}