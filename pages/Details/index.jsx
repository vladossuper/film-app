import React, { useEffect } from 'react';
import { filmDetails } from '../../store/middlewares';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FilmDetails } from '../../components/FilmDetails';
import { Button } from 'react-native-paper';
import { Spinner } from '../../components/Spinner';
import { clearDetails } from '../../store/actions';


export const Details = () => {
	const dispatch = useDispatch();
	const route = useRoute();
	const navigation = useNavigation();
	const { _id } = route.params;
	const film = useSelector(state => state.filmsReducer.details);
	

	useEffect(() => {
		dispatch(filmDetails({ _id }));
		return () => dispatch(clearDetails());
	}, [dispatch, _id]);

	return (
		<>
			{film && <FilmDetails film={film}/>}
			{!film && <Spinner /> }
			<Button onPress={() => navigation.navigate('Films')}>Back to Films</Button>
		</>
	)
}