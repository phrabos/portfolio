import React from 'react';
import '../styles/project.css';
import githubLogo from '../images/github.png';

export const Project = ({ children, image, name, alt, link, github }) => {
	return (
		<>
			<h3>{name}</h3>
			<a href={link} target="_blank">
				<img className="project-image" src={image} alt={alt} />
			</a>
			<a href={github} target="_blank">
				<img className="github-logo" src={githubLogo} alt="github logo" />
			</a>
			<p>{children}</p>
		</>
	);
};
