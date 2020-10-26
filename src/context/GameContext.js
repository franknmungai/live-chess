import React, { createContext, useReducer } from 'react';
import GameReducer from './GameReducer';

const initialState = {
	possibleMoves: [],
	turn: 'w', //w or b
	check: false, //true if the side to move (current turn) is in check.
	gameOver: false,
	status: '', //game over status
	playerName: '',
	playerColor: '',
	opponentName: '',
	message: '',
	opponentMoves: [],
};

export const GameContext = createContext(initialState);

export const GameProvider = ({ children }) => {
	const [state, dispatch] = useReducer(GameReducer, initialState);

	return (
		<GameContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GameContext.Provider>
	);
};
