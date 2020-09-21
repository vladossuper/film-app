import * as types from '../types';

const initialState = {
  status: null
};

export const uploadFileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPLOAD_STATUS: {
      const { status } = action.payload;
      return {
        ...state,
        status
      }
    }
    default: return state
  }
}