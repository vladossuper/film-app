import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../store/middlewares';
import { Spinner } from '../../components/Spinner';
import { Film } from '../../components/Film';
import { NoFilm } from '../../components/NoFilm';
import { Search } from '.././../components/Searchbar';
import {  ScrollView, View } from 'react-native';
import { AddFilm } from '../../components/AddFilm';

export const Films = () => {
	const dispatch = useDispatch();
  const status = useSelector(state => state.filmsReducer.status);
	const films = useSelector(state => state.filmsReducer.films);
 
  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);
	
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
			{/* <NoFilm /> */}
		</>
		
	)
}