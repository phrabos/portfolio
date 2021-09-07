import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { BsArrowDownShort } from 'react-icons/bs';
import '../styles/top.css';

export const Top = () => {
	return (
		<section className="top-container">
			<div className="inner-top">
				<h1 className="name">Patrick Hrabos</h1>
				<h2 className="summary">
					Software engineer passionate about the process of coding, from
					planning to deployment and learning along the way.
				</h2>
				<AnchorLink className="arrow" to="/#projects">
					<BsArrowDownShort size="6rem" />
				</AnchorLink>
			</div>
		</section>
	);
};
