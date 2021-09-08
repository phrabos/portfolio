import React, { useState } from 'react';
import { Button } from './Button';
import { Header } from './Header';
import '../styles/form.css';

export const Contact = () => {
	const [emailInput, setEmailInput] = useState('');
	const [nameInput, setNameInput] = useState('');
	const [messageInput, setMessageInput] = useState('');

	function handleEmailInputChange(event) {
		setEmailInput(event.target.value);
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		fetch(`${process.env.GATSBY_API_URL}`, {
			method: 'POST',
			body: JSON.stringify({
				email: emailInput,
				name: nameInput,
				message: messageInput,
			}),
			headers: { 'Content-Type': 'application/json' },
		});
	}
	return (
		<>
			<section className="contact-wrapper">
				<Header id="contact">Contact</Header>
				<div className="inner-container">
					<form onSubmit={handleFormSubmit}>
						<input
							value={emailInput}
							type="email"
							placeholder="email"
							onChange={(e) => setEmailInput(e.target.value)}
						/>
						<input
							value={nameInput}
							type="text"
							placeholder="name"
							onChange={(e) => setNameInput(e.target.value)}
						/>
						<textarea
							value={messageInput}
							placeholder="message..."
							rows="6"
							onChange={(e) => setMessageInput(e.target.value)}
						/>
						<Button>Submit</Button>
					</form>
				</div>
			</section>
		</>
	);
};
