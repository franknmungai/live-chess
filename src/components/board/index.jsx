import React from 'react';
import PropTypes from 'prop-types';
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

Board.prototype = {
	cells: PropTypes.array.isRequired,
};
export default Board;
