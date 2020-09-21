import React from 'react';
import { Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export const NoFilm = () => {
	const navigation = useNavigation();

	return (
		<Card>
			<Card.Title title="No Film" subtitle="You can add some films" />
		</Card>
	)
}