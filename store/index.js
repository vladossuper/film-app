import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { filmsReducer } from './reducers/films';
import { searchReducer } from './reducers/search';
import { uploadFileReducer } from './reducers/uploadFile';

const rootReducer = combineReducers({
    filmsReducer,
    searchReducer,
    uploadFileReducer
});


export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
