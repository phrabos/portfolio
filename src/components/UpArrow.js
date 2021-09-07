import React, { useState } from 'react';
import { BsArrowUpShort } from '@react-icons/all-files/bs/BsArrowUpShort';
// import { AnchorLink } from 'gatsby-plugin-anchor-links';
import '../styles/uparrow.css';

export const UpArrow = () => {
	const [showScroll, setShowScroll] = useState(false);

	const isBrowser = typeof window !== 'undefined';

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 800) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 800) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (isBrowser) {
		window.addEventListener('scroll', checkScrollTop);
	}
	return (
		<div className="up-arrow-wrapper">
			<BsArrowUpShort
				onClick={scrollTop}
				className="up-arrow bounce-1"
				size="6rem"
				style={{ height: '6rem', display: showScroll ? 'block' : 'none' }}
			/>
		</div>
	);
};
