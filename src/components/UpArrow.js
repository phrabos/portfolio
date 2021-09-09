import React, { useState } from 'react';
import { BsArrowUpShort } from '@react-icons/all-files/bs/BsArrowUpShort';
import '../styles/uparrow.css';

export const UpArrow = () => {
	const [showScroll, setShowScroll] = useState(false);

	const isBrowser = typeof window !== 'undefined';

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 750) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 750) {
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
				className={showScroll ? 'up-arrow bounce-1' : 'hide'}
				size="6rem"
			/>
		</div>
	);
};
