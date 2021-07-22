import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import '../styles/nav.css';

export const Navbar = () => {
	return (
		<nav>
			<AnchorLink to="/#about">about</AnchorLink>
			<AnchorLink to="/#projects">projects</AnchorLink>
			<AnchorLink to="/#contact">contact</AnchorLink>
		</nav>
	);
};
