import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import '../styles/nav.css';

export const Navbar = () => {
	// const [hover, setHover] = useState(false);

	return (
		<nav>
			<AnchorLink to="/#projects">projects</AnchorLink>
			<AnchorLink to="/#about">about</AnchorLink>
			<AnchorLink to="/#contact">contact</AnchorLink>
		</nav>
	);
};
