import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import '../styles/global.css';

export const Navbar = () => {
	return (
		<nav>
			<div className="links">
				<AnchorLink to="/#about">about</AnchorLink>
				<AnchorLink to="/#projects">projects</AnchorLink>
				<AnchorLink to="/#contact">contact</AnchorLink>
			</div>
		</nav>
	);
};
