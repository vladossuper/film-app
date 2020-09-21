import React, { useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from './useDebounce';
import { useDispatch } from 'react-redux';
import { fetchSearch, fetchFilms } from '../../store/middlewares';
import { filmStatus } from '../../store/actions';

export const Search = () => {
	const dispatch = useDispatch();
	const [searchQuery, setSearchQuery] = React.useState('');
	const onChangeSearch = query => setSearchQuery(query);
	const search = useDebounce(searchQuery, 1500);

	useEffect(() => {
    if (search && search.length > 2) {
      dispatch(filmStatus({ status: null }));
      dispatch(fetchSearch({ search }));
		}
		if (search.length === 0) {
			dispatch(filmStatus({ status: null }));
			dispatch(fetchFilms());
		}
	}, [search, dispatch]);

	return (
		<Searchbar
			placeholder="Search"
			onChangeText={onChangeSearch}
			value={searchQuery}
		/>
	)
}