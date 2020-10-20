import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//  stores the App's context state that deals with moving pieces and highlighting squares
const initialState = {
	from: '',
	to: '',
	possibleMoves: [],
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};
