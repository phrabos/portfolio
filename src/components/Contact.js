import React, { useState } from 'react';
import { VscFilePdf } from 'react-icons/vsc';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Button } from './Button';
import { Header } from './Header';
import '../styles/form.css';

export const Contact = () => {
	const [emailInput, setEmailInput] = useState('');
	const [nameInput, setNameInput] = useState('');
	const [messageInput, setMessageInput] = useState('');
	const [formErrors, setFormErrors] = useState({});
	const [formSuccess, setFormSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	function handleFormSubmit(event) {
		event.preventDefault();
		const formErrors = validate(emailInput, nameInput, messageInput);
		if (Object.keys(formErrors).length === 0) {
			setLoading(true);
			fetch('https://hrabos-portfolio-server.herokuapp.com/', {
				method: 'POST',
				body: JSON.stringify({
					email: emailInput,
					name: nameInput,
					message: messageInput,
				}),
				headers: { 'Content-Type': 'application/json' },
			})
				.then((res) => {
					if (res.status === 200) {
						setLoading(false);
						setFormSuccess(true);
						setTimeout(() => {
							setFormSuccess(false);
						}, 5000);
					}
				})
				.catch((err) => console.error(err));
			setEmailInput('');
			setNameInput('');
			setMessageInput('');
			setFormErrors({});
		} else {
			setLoading(false);
			setFormErrors(formErrors);
		}
	}

	function validate(email, name, message) {
		let errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email) {
			errors.email = 'Email cannot be blank';
		} else if (!regex.test(email)) {
			errors.email = 'Invalid email format';
		}
		if (!name) {
			errors.name = 'Name cannot be blank';
		} else if (name.length <= 1) {
			errors.name = 'Name must be more than 2 characters';
		}
		if (!message) {
			errors.message = 'Message cannot be blank';
		} else if (message.length >= 256) {
			errors.message = 'Message must be less than 256 characters';
		}
		return errors;
	}
	return (
		<>
			<section className="contact-wrapper">
				<Header id="contact">Let's Connect</Header>
				<div className="icon-div">
					<a href="https://github.com/phrabos" target="_blank" rel="noreferrer">
						<AiFillGithub size="4rem" className="logos" />
					</a>
					<a
						href="https://www.linkedin.com/in/patrick-hrabos/"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillLinkedin size="4rem" className="logos" />
					</a>
					<a href="resume.pdf" target="_blank" rel="noreferrer">
						<VscFilePdf size="4rem" className="logos" />
					</a>
				</div>

				<div className="inner-container">
					<form onSubmit={handleFormSubmit}>
						<input
							value={emailInput}
							type="email"
							name="email"
							placeholder="email"
							onChange={(event) => setEmailInput(event.target.value)}
						/>
						{formErrors.email && (
							<span style={{ color: '#cc9393' }}>{formErrors.email}</span>
						)}
						<input
							value={nameInput}
							type="text"
							name="name"
							placeholder="name"
							onChange={(event) => setNameInput(event.target.value)}
						/>
						{formErrors.name && (
							<span style={{ color: '#cc9393' }}>{formErrors.name}</span>
						)}
						<textarea
							value={messageInput}
							name="message"
							placeholder="message..."
							rows="6"
							onChange={(event) => setMessageInput(event.target.value)}
						/>
						{formErrors.message && (
							<span style={{ color: '#cc9393' }}>{formErrors.message}</span>
						)}
						<Button>Submit</Button>
					</form>
					{loading && <section className="loading">Sending message...</section>}
					{formSuccess && (
						<section className="success-message">
							Thank you for reaching out!
						</section>
					)}
				</div>
			</section>
		</>
	);
};
