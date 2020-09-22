import React, { useState } from 'react';
import { Button, Portal, Dialog, Paragraph } from 'react-native-paper';
import { deleteFilm } from '../../store/middlewares';
import { useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

export const DeleteModal = ({ _id }) => {
	const [visible, setVisible] = useState(false);
	const showDialog = () => setVisible(true);
	const hideDialog = () => setVisible(false);
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const route = useRoute();

	const filmDelete = () => {
		dispatch(deleteFilm({ _id }));
		if (route.name === 'Details') {
			navigation.navigate('Films');
		}
	};

	return (
		<>
			<Button mode='outlined' icon='delete' color='red' onPress={showDialog}>Delete</Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Delete Film</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Are you want delete this film?</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Close</Button>
						<Button onPress={filmDelete}>Delete</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
		</>
	)
}