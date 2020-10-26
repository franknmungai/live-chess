import React from 'react';
import './button-styles.css';

const Button = ({ onClick, children }) => {
	return (
		<div onClick={onClick} className="button">
			{children}
		</div>
	);
};

export default Button;
