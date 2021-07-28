import * as React from 'react';
import { Bio } from '../components/Bio';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Project } from '../components/Project';
import { Top } from '../components/Top';
import '../styles/global.css';

const IndexPage = () => {
	return (
		<>
			<Navbar />
			<main>
				<Top />
				<Header id="about">About</Header>
				<Bio />
				<Header id="projects">Projects</Header>
				<Project
					name="Socket Jockey"
					image="https://jakethrasher.netlify.app/assets/socketjockey.png"
					alt="socket-jockey-screenshot"
				>
					Collaboratively composing music with physics and the collision of time
					and space. Users can choose a solo or collaborative room where they
					drag and drop sonically charged shapes and control the sounds by
					adjusting the physics engine. <br />
					This projecet was completed as a team of eight people working remotely
					over a two-week sprint. My contributions were setting up the Socket.io
					server, pair-programming the chat feature using Socket.io to
					synchronize state on all related clients, pair-programmig the control
					panel state management, and pair-programming the logic for state
					managment on the server.
				</Project>
				<Project
					name="Shame B0t"
					image="https://via.placeholder.com/500x350"
					alt="shame-bot-logo"
				>
					A Discord bot designed to increase productivity by restricting access
					to chat channels for a user-specified time limit. Built remotely with
					a team of four people over a four-day sprint. My contributions to the
					project were coding the countdown timer commands and logic, the exit
					command, and functions to change the user's nickname.
				</Project>
				<Project
					name="Taurus Trading"
					image="https://via.placeholder.com/500x350"
					alt="taurus-trading-logo"
				>
					Taurus Trading is a mock portfolio and stock market research app that
					implements a live social media feed to gauge market sentiment. Built
					remotely with a team of four people over a four-day sprint. I coded
					the full-stack social media feature in addition to the functions and
					rendering of the trending stocks feature.
				</Project>
				<Project
					name="Nutrizone"
					image="https://jakethrasher.netlify.app/assets/nutrizone.png"
					alt="nutrizone-screenshot"
				>
					Nutrizone helps users track their daily caloric intake based on their
					preferred diet type. We provide tabular data and bar charts built with
					CanvasJS to help the user meet their daily macronutrient goals. Built
					remotely with a team of four people over a four-day sprint using
					vanilla JavaScript. I coded the modals, the food log page and the
					feature to add a custom food to the data saved in local storage.
				</Project>
				<Contact />
			</main>
		</>
	);
};

export default IndexPage;
