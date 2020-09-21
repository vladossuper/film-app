import React, { useState, useEffect } from 'react';
import { Button, Paragraph, Dialog, Portal, TextInput, Typography  } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useFormValidation } from './useFormValidation';
import { setFilm } from '../../store/middlewares';;

export const AddFilm = () => {
	const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
	const hideDialog = () => setVisible(false);
	const dispatch = useDispatch();

	const [title, setTitle] = useState(' ');
	const [year, setYear] = useState(' ');
	const [format, setFormat] = useState(' ');
	const [stars, setStars] = useState(' ');

	const error = useFormValidation({ title, year, format, stars });

	const onSubmit = () => {
		if (title.length > 0 && year.length > 0 && format.length > 0 && stars.length > 0) {
			dispatch(setFilm({ title, release_year: year, format, stars }))
			handleClose();
		}
	};
	
	const handleClose = () => {
		setVisible(false);
		setTitle('');
		setYear('');
		setFormat('');
		setStars('');
	}
	
	return (
		<>
		<Button onPress={showDialog}>Add Film</Button>
		<Portal>
			<Dialog visible={visible} onDismiss={hideDialog}>
				<Dialog.Title>Add Film</Dialog.Title>
				<Dialog.Content>
					<Paragraph>Add some interesting films for you</Paragraph>
					<TextInput
						style={{marginTop: 10}}
						label='Title'
						value={title}
						onChangeText={title => setTitle(title.trim())}
						error={error && error.titleError}
					/>
					<TextInput
						style={{marginTop: 10}}
						label='Year'
						value={year}
						onChangeText={year => setYear(year.trim())}
						error={error && error.releaseYearError}
					/>
					<TextInput
						style={{marginTop: 10}}
						label='Format'
						value={format}
						onChangeText={format => setFormat(format.trim())}
						error={error && error.formatError}
					/>
					<TextInput
						style={{marginTop: 10}}
						label='Stars'
						value={stars}
						onChangeText={stars => setStars(stars.trim())}
						error={error && error.starsError}
					/>
				</Dialog.Content>
				<Dialog.Actions>
					<Button onPress={onSubmit}>Add</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
		</>
	)
}