import React from 'react';
import { Card, Button, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { DeleteModal } from '../DeleteFilm';

export const Film = ({ film }) => {
	const navigation = useNavigation();

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
				<DeleteModal _id={film._id} />
				<Button mode='outlined' icon='information-outline' onPress={() => filmInfo(film._id)}>Info</Button>
			</Card.Actions>
		</Card>
	)
}