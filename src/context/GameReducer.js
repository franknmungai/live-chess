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
			return { ...state, possibleMoves: [] };
		case types.SET_TURN:
			return { ...state, turn: action.player, check: action.check };
		case types.SET_PLAYER:
			return { ...state, playerName: action.name };
		case types.SET_PLAYER_COLOR:
			return { ...state, playerColor: action.color };
		case types.SET_OPPONENT:
			return { ...state, opponentName: action.name };
		case types.SET_MESSAGE:
			return { ...state, message: action.message };
		case types.CLEAR_MESSAGE:
			return { ...state, message: '' };
		case types.SET_OPPONENT_MOVES:
			return { ...state, opponentMoves: action.moves };
		case types.CLEAR_OPPONENT_MOVES:
			return { ...state, opponentMoves: [] };
		case types.GAME_OVER:
			return {
				...state,
				gameOver: true,
				status: action.status,
				turn: action.player,
			};
		default:
			return state;
	}
};

export default GameReducer;
