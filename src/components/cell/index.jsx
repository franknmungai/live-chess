import React from 'react';
import PropTypes from 'prop-types';
import './cell-styles.css';
import { isLightSquare, Cell as BoardCell } from '../../functions/';
import Piece from '../piece';

const Cell = ({ cell, index }) => {
	const light = isLightSquare(cell.pos, index);

	return (
		<div className={`cell ${light ? 'light' : 'dark'}`}>
			<Piece pos={cell.pos} name={cell.piece} />
		</div>
	);
};

Cell.prototype = {
	cell: PropTypes.instanceOf(BoardCell).isRequired,
	index: PropTypes.number.isRequired,
};
export default Cell;
