import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { BsArrowDownShort } from 'react-icons/bs';
import '../styles/top.css';

export const Top = () => {
	return (
		<section className="top-container">
			<h1 style={{ fontSize: '8vw' }}>Patrick Hrabos</h1>
			<h2
				style={{
					fontSize: '4vw',
					paddingBottom: '3rem',
				}}
			>
				Software engineer passionate about the process of coding, from planning
				to deployment and learning along the way.
			</h2>
			<AnchorLink to="/#about">
				<BsArrowDownShort
					className="arrow"
					size="4rem"
					style={{ color: 'white' }}
				/>
			</AnchorLink>
		</section>
	);
};
