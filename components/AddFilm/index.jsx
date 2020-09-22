import React, { useState, useEffect } from 'react';
import { Button, Paragraph, Dialog, Portal, TextInput, Typography, Checkbox  } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useFormValidation } from './useFormValidation';
import { setFilm } from '../../store/middlewares';

export const AddFilm = () => {
	const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
	const hideDialog = () => setVisible(false);
	const [isSubmit, setSubmit] = useState(false);
	
	const dispatch = useDispatch();

	const [title, setTitle] = useState('');
	const [year, setYear] = useState('');
	const [format, setFormat] = useState([]);
	const [stars, setStars] = useState('');
	const [dvdChecked, setDvdChecked] = useState(false);
	const [blueRayChecked, setBlueRayChecked] = useState(false);
	const [vhsChecked, setVhsChecked] = useState(false);

	const error = useFormValidation({ title, year, format, stars, isSubmit, dvdChecked, blueRayChecked, vhsChecked  })

	const onSubmit = () => {
		setSubmit(true);
		if (title.length > 0 && year.length > 0 && (dvdChecked === true || blueRayChecked === true || vhsChecked === true) && stars.length > 0) {
			const formats = `${dvdChecked ? 'DVD' : ''} ${blueRayChecked ? 'Blue-Ray' : ''} ${vhsChecked ? 'VHS': ''}`;
			dispatch(setFilm({ title, release_year: year, format: formats.trim(), stars }));
			handleClose();
		}
	};
	
	const handleClose = () => {
		setVisible(false);
		setTitle('');
		setYear('');
		setFormat('');
		setStars('');
		setDvdChecked(false);
		setBlueRayChecked(false);
		setVhsChecked(false);
		setSubmit(false);
	};
	
	return (
		<>
		<Button onPress={showDialog}>Add Film</Button>
		<Portal>
			<Dialog visible={visible} onDismiss={hideDialog}>
				<Dialog.Title>Add Film</Dialog.Title>
				<Dialog.Content>
					<Paragraph>Add some interesting films for you</Paragraph>
					<TextInput
						label='Title'
						value={title}
						onChangeText={title => setTitle(title)}
						error={error && error.titleError}
					/>
					{error && <Paragraph style={{color: 'red'}}>{error.titleErrorText}</Paragraph>}
					<TextInput
						label='Year'
						value={year}
						onChangeText={year => setYear(year)}
						error={error && error.releaseYearError}
					/>
					{error && <Paragraph style={{color: 'red'}}>{error.releaseYearErrorText}</Paragraph>}
					<Paragraph>Formats</Paragraph>
					<Checkbox.Item
						label='DVD'
						status={dvdChecked ? 'checked' : 'unchecked'}
						onPress={() => {
							setDvdChecked(!dvdChecked);
						}}
					/>
					<Checkbox.Item
						label='Blue-Ray'
						status={blueRayChecked ? 'checked' : 'unchecked'}
						onPress={() => {
							setBlueRayChecked(!blueRayChecked);
						}}
					/>
					<Checkbox.Item
						label='VHS'
						status={vhsChecked ? 'checked' : 'unchecked'}
						onPress={() => {
							setVhsChecked(!vhsChecked);
						}}
					/>
					{error && <Paragraph style={{color: 'red'}}>{error.formatErrorText}</Paragraph>}
					<TextInput
						style={{marginTop: 10}}
						label='Stars'
						value={stars}
						onChangeText={stars => setStars(stars)}
						error={error && error.starsError}
					/>
					{error && <Paragraph style={{color: 'red'}}>{error.starsErrorText}</Paragraph>}
				</Dialog.Content>
				<Dialog.Actions>
					<Button onPress={handleClose}>Close</Button>
					<Button onPress={onSubmit}>Add</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
		</>
	)
}