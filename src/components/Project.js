import React from 'react';
import '../styles/project.css';

export const Project = ({ children, image, name, alt }) => {
	return (
		<>
			<h3>{name}</h3>
			<img className="project-image" src={image} alt={alt} />
			<p>{children}</p>
		</>
	);
};
