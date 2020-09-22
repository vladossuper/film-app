import React from 'react';
import { Card, Button, Paragraph } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { DeleteModal } from '../DeleteFilm';


export const FilmDetails = ({ film }) => {
	const route = useRoute();

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
				{route.name !== 'Details' && <Button mode='outlined' icon='information-outline' onPress={() => filmInfo(film._id)}>Info</Button>}
			</Card.Actions>
		</Card>
	)
}