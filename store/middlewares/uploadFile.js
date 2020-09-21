import api from '../../api';
import { uploadStatus } from '../actions';
import { fetchFilms } from './index';

export const fileUpload = formData => async dispatch => {
  try {
      const response = await api.postFile({ path: 'upload', params: formData });
      const { status } = response;
      dispatch(uploadStatus({ status }));
      if (status === 200) {
          dispatch(fetchFilms());
      }
  } catch (err) {
    console.error(err);
  }
}