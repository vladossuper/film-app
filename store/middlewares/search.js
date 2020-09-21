import api from '../../api';
import { filmStatus, filmList } from '../actions';

export const fetchSearch = ({ search }) => async dispatch => {
  try {
      const response = await api.post({ path: 'search', params: { search } });
      const { status, data } = response;
      const { result } = data;
      dispatch(filmStatus({ status }));
      dispatch(filmList({ films: result }));
  } catch (err) {
      console.error(err);
  }
};