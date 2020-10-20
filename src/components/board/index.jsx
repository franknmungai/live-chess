import React from 'react';
import PropTypes from 'prop-types';
import './board.styles.css';
import Cell from '../cell';

const Board = ({ cells, ...props }) => {
	return (
		<div className="board">
			{cells.map((cell, index) => (
				<Cell cell={cell} index={index} key={cell.pos} {...props} />
			))}
		</div>
	);
};

Board.prototype = {
	cells: PropTypes.array.isRequired,
	makeMove: PropTypes.func,
	setFromPos: PropTypes.func,
};
export default Board;
