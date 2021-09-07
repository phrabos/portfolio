import React from 'react';
import '../styles/global.css';

export const Header = ({ children, id }) => {
	return (
		<h1 style={{ fontSize: '2em' }} id={id}>
			{children}
		</h1>
	);
};
