import React, { useState, useRef, useEffect, useContext } from 'react';
import Chess from 'chess.js';
import { createBoard } from '../../functions';
import Board from '../../components/board';
import { GameContext } from '../../context/GameContext';
import { types } from '../../context/actions';
const FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

const Game = () => {
	const [fen, setFen] = useState(FEN);
	const { current: chess } = useRef(new Chess(fen));
	const [board, setBoard] = useState(createBoard(fen));
	const { dispatch } = useContext(GameContext);

	useEffect(() => {
		setBoard(createBoard(fen));
	}, [fen]);

	const fromPos = useRef();

	const makeMove = (pos) => {
		const from = fromPos.current;
		const to = pos;
		chess.move({ from, to });
		dispatch({ type: types.CLEAR_POSSIBLE_MOVES });
		setFen(chess.fen());
	};

	const setFromPos = (pos) => {
		fromPos.current = pos;
		dispatch({
			type: types.SET_POSSIBLE_MOVES,
			moves: chess.moves({ square: pos }),
		});
	};

	return (
		<div className="game">
			<Board cells={board} makeMove={makeMove} setFromPos={setFromPos} />
		</div>
	);
};

export default Game;
