import React from 'react';
import '../styles/bio.css';
import { Header } from './Header';

export const Bio = () => {
	return (
		<>
			<Header id="about">About</Header>
			<section className="bio-wrapper">
				{/* <h1>About2</h1> */}
				<img
					className="bio-photo"
					src="https://avatars.githubusercontent.com/u/73199651?s=400&u=d36d92e05c949994580702381836a52f7e512eb1&v=4"
					alt="portrait"
				/>
				<p className="bio-text">
					I have a background raising capital as a skilled and accomplished
					accountant where I gained valuable business experience and teamwork
					skills by solving the daily challenges of growth that start-up
					companies often face. I have a well-rounded approach to timely solving
					big problems by breaking them down into small, manageable pieces and
					being diligent throughout the process.
					<br />
					<br />
					When I am not coding I like to run long distances, observe nature,
					travel, and sip the best loose-leaf teas I can find. I am on a
					never-ending quest to learn everything.
				</p>
			</section>
		</>
	);
};
