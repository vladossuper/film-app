import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../store/middlewares';
import { Spinner } from '../../components/Spinner';
import { Film } from '../../components/Film';
import { NoFilm } from '../../components/NoFilm';
import { Search } from '.././../components/Searchbar';
import {  ScrollView, View } from 'react-native';
import { AddFilm } from '../../components/AddFilm';
import Toast from 'react-native-root-toast';

export const Films = () => {
	const dispatch = useDispatch();
  const status = useSelector(state => state.filmsReducer.status);
	const films = useSelector(state => state.filmsReducer.films);
	const statusDelete = useSelector(state => state.filmsReducer.deleteStatus);
	const statusSetFilm = useSelector(state => state.filmsReducer.setFilmStatus);
 
  useEffect(() => {
		dispatch(fetchFilms());
		if (statusDelete && statusDelete === 200) {
			Toast.show('Film was deleted', {
				duration: 1500,
				position: 40,
				shadow: true,
				animation: true,
				hideOnPress: true,
				delay: 0,
				opacity: 1,
				backgroundColor: "green"
			});
		};
		if (statusSetFilm && statusSetFilm === 200) {
			Toast.show('Film was added', {
				duration: 1500,
				position: 40,
				shadow: true,
				animation: true,
				hideOnPress: true,
				delay: 0,
				opacity: 1,
				backgroundColor: "green"
			});
		}
		if (statusSetFilm && statusSetFilm === 302) {
			Toast.show('Film was already exist', {
				duration: 1500,
				position: 40,
				shadow: true,
				animation: true,
				hideOnPress: true,
				delay: 0,
				opacity: 1,
				backgroundColor: "orange"
			});
		}
  }, [dispatch, statusDelete, statusSetFilm]);
	
	return (
		<>
			<Search />
			<AddFilm />
			
			{!status && <Spinner />}
			{status === 204 && <NoFilm />}
			<ScrollView>
				{status === 200 && films && films.map(film => {
					return (
						<Film key={film._id}  key={film._id} film={film} />
					)
				})}
			</ScrollView>
		</>
		
	)
}