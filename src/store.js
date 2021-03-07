import {
	configureStore,
	getDefaultMiddleware,
	combineReducers,
} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import popularReducer from './stores/popular';

const rootReducer = combineReducers({
	popular: popularReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: [...getDefaultMiddleware()],
});

export const useAppDispatch = () => useDispatch();
