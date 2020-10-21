import { types } from './actions';

const getPositions = (moves) => {
	return moves.map((move) => {
		const n = move.length;
		return move.substring(n - 2);
	});
};

const GameReducer = (state, action) => {
	switch (action.type) {
		case types.SET_POSSIBLE_MOVES:
			return {
				...state,
				possibleMoves: getPositions(action.moves),
			};
		case types.CLEAR_POSSIBLE_MOVES:
			return {
				...state,
				possibleMoves: [],
			};
		default:
			return state;
	}
};

export default GameReducer;
