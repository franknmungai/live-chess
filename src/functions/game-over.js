/**
 * A custom hook that returns game over status
 * @param {*} chess An instance of the current Chess object
 * @returns {[boolean, string]}
 */
export const getGameOverState = (chess) => {
	//Returns true if the game has ended via checkmate, stalemate, draw, threefold repetition, or insufficient material. Otherwise, returns false.
	if (!chess.game_over()) {
		return [false, ''];
	}
	if (chess.in_checkmate()) {
		return [true, 'checkmate'];
	}
	if (chess.in_draw()) {
		return [true, 'draw'];
	}
	if (chess.in_stalemate()) {
		return [true, 'stalemate'];
	}
	if (chess.in_threefold_repetition()) {
		return [true, 'three fold repetition'];
	}
};

export default getGameOverState;
