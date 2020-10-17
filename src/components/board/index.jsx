import React from 'react';
import './board.styles.css';

const Board = ({ cells }) => {
	return (
		<div className="board">
			{cells.map((cell) => (
				<div>{cell.pos}</div>
			))}
		</div>
	);
};

export default Board;
