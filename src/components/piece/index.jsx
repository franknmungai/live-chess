import React from 'react';
import PropTypes from 'prop-types';

import './piece-styles.css';

const Piece = ({ name, pos }) => {
	const color = name === name.toUpperCase() ? 'b' : 'w';
	const imageName = color + name.toUpperCase();

	const handleClick = () => {
		console.log({ name, color, pos });
	};

	let image;

	try {
		image = require(`../../assets/pieces/${imageName}.png`);
	} catch (error) {
		image = '';
	}

	return (
		<div
			className="piece"
			style={{
				background: `url(${image}) center center/cover`,
			}}
			draggable={true}
			onClick={handleClick}
		/>
	);
};

Piece.prototype = {
	name: PropTypes.string.isRequired,
	pos: PropTypes.string.isRequired,
};
export default Piece;
