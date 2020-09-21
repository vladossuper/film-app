import api from '../../api';
import * as actions from '../actions';

export const fetchFilms = () => dispatch => {
  api.get({ path: 'film/get', params: {}})
  .then(response => {
    const { status, data } = response;
    const { films } = data;
    dispatch(actions.filmStatus({ status }));
    dispatch(actions.filmList({ films }));
  })
  .catch(err => {
    console.log(err);
    // const { status } = err.response;
    // dispatch(actions.filmStatus({ status }));
  })
};

export const setFilm = ({ title, release_year, format, stars }) => async dispatch => {
  try {
    const response = await api.post({ path: 'film/set', params: { title, release_year, format, stars } });
    const { status } = response;
    if (status === 200) {
        dispatch(fetchFilms());
    };
    dispatch(actions.setFilmStatus({ status }));
    setTimeout(() => {
      dispatch(actions.setFilmStatus({ status: null }))
    },1000); 
  } catch (err) {
    const { status } = err.response;
    dispatch(actions.setFilmStatus({ status }));
  }
};

export const deleteFilm = ({ _id }) => async dispatch => {
  try {
      const response = await api.post({ path: 'film/delete', params: { _id } });
      const { status } = response;
      if (status === 200) {
        dispatch(fetchFilms());
      };
      dispatch(actions.deleteStatus({ status }));
      setTimeout(() => {
        dispatch(actions.deleteStatus({ status }));
      }, 1000)
      setTimeout(() => {
        dispatch(actions.deleteStatus({ status: null }));
      }, 1000);
  } catch (err) {
    const { status } = err.response;
    dispatch(actions.deleteStatus({ status }));

  }
};

export const filmDetails = ({ _id }) => async dispatch => {
  try {
    const response = await api.post({ path: 'film/details', params: { _id } })
    const { status, data } = response;
    const { film } = data;
    dispatch(actions.detailsStatus({ status }));
    dispatch(actions.details({ film }))
  } catch (err) {
    dispatch(actions.detailsError({error: true}));
    dispatch(actions.detailsStatus({ status: 500 }));
  }
}