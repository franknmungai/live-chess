import React from 'react';
import './board.styles.css';
import Cell from '../cell';

const Board = ({ cells }) => {
	return (
		<div className="board">
			{cells.map((cell, index) => (
				<Cell cell={cell} index={index} key={cell.pos} />
			))}
		</div>
	);
};

export default Board;
