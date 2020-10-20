import React, { useState, useRef, useEffect } from 'react';
import Chess from 'chess.js';
import { createBoard } from '../../functions';
import Board from '../../components/board';

const FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
const Game = () => {
	const [fen, setFen] = useState(FEN);
	const { current: chess } = useRef(new Chess(fen));
	const [board, setBoard] = useState(createBoard(fen));
	useEffect(() => {
		setBoard(createBoard(fen));
	}, [fen]);

	const fromPos = useRef();

	const makeMove = (pos) => {
		const from = fromPos.current;
		const to = pos;
		chess.move({ from, to });
		setFen(chess.fen());
	};

	const setFromPos = (pos) => (fromPos.current = pos);

	return (
		<div className="game">
			<Board cells={board} makeMove={makeMove} setFromPos={setFromPos} />
		</div>
	);
};

export default Game;
