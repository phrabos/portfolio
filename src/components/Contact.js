import React from 'react';
// import { BsArrowUpShort } from 'react-icons/bs';
import { Button } from './Button';
import { Header } from './Header';
import '../styles/form.css';

export const Contact = () => {
	return (
		<section className="contact-wrapper">
			<Header id="contact">Contact</Header>
			<form onSubmit={() => console.log('works')}>
				<input type="email" placeholder="email" />
				<input type="text" placeholder="name" />
				<textarea placeholder="message..." rows="5" cols="35" />
				<Button>Submit</Button>
			</form>
		</section>
	);
};
