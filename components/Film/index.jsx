import React, { useEffect } from 'react';
import { deleteFilm } from '../../store/middlewares';
import { useDispatch } from 'react-redux';
import { Card, Button, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export const Film = ({ film }) => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const filmDelete = _id => {
		dispatch(deleteFilm({ _id }));
	};

	const filmInfo = _id => {
		navigation.navigate('Details', { _id });
	}

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
				<Button mode='outlined' icon='information-outline' onPress={() => filmInfo(film._id)}>Info</Button>
			</Card.Actions>
		</Card>
	)
}