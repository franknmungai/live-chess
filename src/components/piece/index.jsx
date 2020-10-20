import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './piece-styles.css';

const Piece = ({ name, pos, setFromPos }) => {
	const color = name === name.toUpperCase() ? 'w' : 'b';
	const imageName = color + name.toUpperCase();
	const element = useRef();

	let image;

	try {
		image = require(`../../assets/pieces/${imageName}.png`);
	} catch (error) {
		image = '';
	}

	const handleDragStart = () => {
		setFromPos(pos);
		setTimeout(() => {
			element.current.style.display = 'none';
		}, 0);
	};
	const handleDragEnd = () => {
		element.current.style.display = 'block';
	};
	const handleClick = () => console.log({ name, pos });
	return (
		<div
			className="piece"
			style={{
				background: `url(${image}) center center/cover`,
			}}
			draggable={true}
			ref={element}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			onClick={handleClick}
		/>
	);
};

Piece.prototype = {
	name: PropTypes.string.isRequired,
	pos: PropTypes.string.isRequired,
	setFromPos: PropTypes.func.isRequired,
};
export default Piece;
