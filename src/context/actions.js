export const types = {
	SET_POSSIBLE_MOVES: 'SET_POSSIBLE_MOVES',
	CLEAR_POSSIBLE_MOVES: 'CLEAR_POSSIBLE_MOVES',
	SET_TURN: 'SET_TURN',
	GAME_OVER: 'GAME_OVER',

	SET_PLAYER: 'SET_PLAYER',
	SET_OPPONENT: 'SET_OPPONENT',
	SET_PLAYER_COLOR: 'SET_PLAYER_COLOR',
	SET_MESSAGE: 'SET_MESSAGE',
	CLEAR_MESSAGE: 'CLEAR_MESSAGE',
	SET_OPPONENT_MOVES: 'SET_OPPONENT_MOVES',
	CLEAR_OPPONENT_MOVES: 'CLEAR_OPPONENT_MOVES',
};

export const setPlayer = (name) => ({
	type: types.SET_PLAYER,
	name,
});

export const setOpponent = (opponent) => ({
	type: types.SET_OPPONENT,
	name: opponent?.name,
});

export const setPlayerColor = (color) => ({
	type: types.SET_PLAYER_COLOR,
	color,
});

export const setMessage = (message) => ({
	type: types.SET_MESSAGE,
	message,
});

export const setOpponentMoves = (moves) => ({
	type: types.SET_OPPONENT_MOVES,
	moves,
});

export const clearOpponentMoves = () => ({
	type: types.CLEAR_OPPONENT_MOVES,
});
