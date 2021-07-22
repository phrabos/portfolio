import React from 'react';
import { Button } from './Button';
import { Header } from './Header';

export const Contact = () => {
	return (
		<>
			<Header id="contact">Contact</Header>
			<form onSubmit={() => console.log('works')}>
				<input type="text" placeholder="name" />
				<input type="email" placeholder="email" />
				<textarea placeholder="message..." rows="5" cols="60" />
				<Button>Submit</Button>
			</form>
		</>
	);
};
