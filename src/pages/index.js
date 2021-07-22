import * as React from 'react';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Top } from '../components/Top';
import '../styles/global.css';

const IndexPage = () => {
	return (
		<>
			<Navbar />
			<main>
				<Top />
				<Header id="about">About</Header>
				<p>
					I am a software engineer with a background crunching numbers and
					raising capital as a skilled and accomplished accountant where I
					gained valuable business experience and problem-solving skills. My
					passion for coding began as a kid, writing basic websites in HTML. I
					am excited to merge my business knowledge into a career as a software
					engineer. Outside of work, I am an avid runner and by grinding through
					ultra-endurance feats I have learned lessons in perseverance,
					discipline, and dedication which I have used to take on challenging
					projects in the workforce. I am on a never-ending quest to learn
					everything.
				</p>
				<img
					className="bio-photo"
					src="https://avatars.githubusercontent.com/u/73199651?s=400&u=d36d92e05c949994580702381836a52f7e512eb1&v=4"
					alt=""
				/>

				<Header id="projects">Projects</Header>
				<h3>Socket Jockey</h3>
				<img
					src="https://jakethrasher.netlify.app/assets/socketjockey.png"
					alt=""
				/>
				<p>
					Collaboratively composing music with physics and the collision of time
					and space. Users can choose a solo or collaborative room where they
					drag and drop sonically charged shapes and control the sounds by
					adjusting the physics engine.
				</p>
				<h3>Shame B0t</h3>
				<img src="https://via.placeholder.com/500x350" alt="" />
				<p>
					A Discord bot designed to increase productivity by restricting access
					to chat channels for a user-specified time limit. Built remotely with
					a team of four people over a four-day sprint.
				</p>
				<h3>Taurus Trading</h3>
				<img src="https://via.placeholder.com/500x350" alt="" />
				<p>
					Taurus Trading is a mock portfolio and stock market research app that
					implements a live social media feed to gauge market sentiment. I coded
					the full-stack social media feature in addition to the functions and
					rendering of the trending stocks feature.
				</p>
				<h3>Nutrizone</h3>
				<img
					src="https://jakethrasher.netlify.app/assets/nutrizone.png"
					alt=""
				/>
				<p>
					Nutrizone helps users track their daily caloric intake based on their
					preferred diet type. We provide tabular data and bar charts built with
					CanvasJS to help the user meet their daily macronutrient goals. Built
					remotely with a team of four people over a four-day sprint using
					vanilla JavaScript.
				</p>
				<Contact />
			</main>
		</>
	);
};

export default IndexPage;
