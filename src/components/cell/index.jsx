import React from 'react';
import './cell-styles.css';
import { isLightSquare } from '../../functions/';

const Cell = ({ cell, index }) => {
	const light = isLightSquare(cell.pos, index);

	return <div className={`cell ${light ? 'light' : 'dark'}`}>{cell.pos}</div>;
};

export default Cell;
