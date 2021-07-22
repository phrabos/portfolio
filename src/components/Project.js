import React from 'react';

export const Project = ({ children, image, name, alt }) => {
	return (
		<>
			<h3>{name}</h3>
			<img src={image} alt={alt} />
			<p>{children}</p>
		</>
	);
};
