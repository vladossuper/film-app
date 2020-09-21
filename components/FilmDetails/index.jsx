import React from 'react';
import { deleteFilm } from '../../store/middlewares';
import { useDispatch } from 'react-redux';
import { Card, Button, Paragraph } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';


export const FilmDetails = ({ film }) => {
	const route = useRoute();
	const dispatch = useDispatch();
	const navigation = useNavigation();
	
	const filmDelete = _id => {
		dispatch(deleteFilm({ _id }));
		navigation.navigate('Films');
	};

	return (
		<Card style={{ marginTop: 10 }}>
			<Card.Title titleStyle={{textAlign: 'center'}} title={film.title} />
			<Card.Content>
				<Paragraph>Release Year: {film.release_year}</Paragraph>
				<Paragraph>Format: {film.format}</Paragraph>
				<Paragraph>Stars: {film.stars}</Paragraph>
			</Card.Content>
			<Card.Actions style={{display: 'flex', justifyContent: 'space-between'}}>
				<Button mode='outlined' icon='delete' color='red' onPress={() => filmDelete(film._id)}>Delete</Button>
				{route.name !== 'Details' && <Button mode='outlined' icon='information-outline' onPress={() => filmInfo(film._id)}>Info</Button>}
			</Card.Actions>
		</Card>
	)
}