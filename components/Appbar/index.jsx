import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { Search } from '../Searchbar';

export const AppBar = ({ title }) => {
	const [showSearch, handleShowSearch] = useState(false);
	
	return (
		<>
			<Appbar.Header>
				<Appbar.Content title={title} />
				<Appbar.Action icon="magnify" onPress={() => handleShowSearch(!showSearch)}  />
			</Appbar.Header>
			{ showSearch && <Search /> }
		</>
		
	)
}