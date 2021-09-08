import React from 'react';
import '../styles/project.css';
import githubLogo from '../images/github.png';

export const Project = ({ children, image, name, alt, link, github }) => {
	return (
		<section className="project-wrapper">
			<div className="project-name">
				<h2 className="project-name">{name}</h2>
				<a
					className="github-link"
					href={github}
					target="_blank"
					rel="noreferrer"
				>
					<img className="github-logo" src={githubLogo} alt="github logo" />
				</a>
			</div>
			<a href={link} target="_blank" rel="noreferrer">
				<img className="project-image" src={image} alt={alt} />
			</a>
			<p>{children}</p>
		</section>
	);
};
