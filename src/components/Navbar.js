import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export const Navbar = () => {
	return (
		<nav>
			<div>
				<AnchorLink to="/#about">about</AnchorLink>
				<AnchorLink to="/#projects">projects</AnchorLink>
				<AnchorLink to="/#contact">contact</AnchorLink>
			</div>
		</nav>
	);
};
