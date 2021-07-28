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
				aria-hidden="true"
			>
				links
				{hover && (
					<ul className="links">
						<li>
							<a
								className="anchors"
								href="https://github.com/phrabos"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
						</li>
						<li>
							<a
								className="anchors"
								href="https://www.linkedin.com/in/patrick-hrabos/"
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								className="anchors"
								href="https://www.https://patrickhrabosportfolio.gatsbyjs.io/resume"
								target="_blank"
								rel="noreferrer"
							>
								Resume
							</a>
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
};
