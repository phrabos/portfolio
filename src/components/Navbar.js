import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import '../styles/nav.css';

export const Navbar = () => {
	const [hover, setHover] = useState(false);

	return (
		<nav>
			<AnchorLink to="/#about">about</AnchorLink>
			<AnchorLink to="/#projects">projects</AnchorLink>
			<AnchorLink to="/#contact">contact</AnchorLink>
			<div
				className="nav-links"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				links
				{hover && (
					<div>
						<ul>
							<li>gitHub</li>
							<li>linkedIn</li>
							<li>resume</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};
