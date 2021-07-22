import * as React from 'react';
import { Navbar } from '../components/Navbar';
import '../styles/form.css';
import '../styles/global.css';

const IndexPage = () => {
	return (
		<>
			<Navbar />
			<div className="wrapper">
				<h1 style={{fontSize: "4rem"}}>Patrick Hrabos</h1>
				<h2 style={{fontSize: "2rem"}}>Software engineer passionate about the process of coding, from planning to deployment and learning along the way.</h2>
				<h1 id="about">About</h1>
				<p>
					I am a software engineer with a background crunching numbers and raising capital as a skilled and accomplished accountant where I gained valuable business experience and problem-solving skills.  My passion for coding began as a kid, writing basic 					websites in HTML. I am excited to be able to merge my business knowledge into a career as a software engineer. Outside of work, I 				am an avid runner and by grinding through ultra-endurance feats I have learned lessons in perseverance, discipline, and dedication 				which I have used to take on challenging projects in the workforce. I am on a never-ending quest to learn everything. 

				</p>
				<img style={{height: "350px"}} src="https://avatars.githubusercontent.com/u/73199651?s=400&u=d36d92e05c949994580702381836a52f7e512eb1&v=4"/>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
					varius tellus sit amet sagittis. In nec elit sodales, ornare nunc sed,
					tristique leo. Donec non lacus sem. Morbi rutrum nec purus non
					facilisis. Donec molestie sagittis efficitur. Etiam nec interdum
					lacus. Donec vel urna quis ex luctus tincidunt non sollicitudin
					sapien. Sed non risus et metus pharetra scelerisque. Pellentesque
					habitant morbi tristique senectus et netus et malesuada fames ac
					turpis egestas. Vestibulum mattis urna mi, at vestibulum libero
					faucibus ac. Cras ultricies nulla a quam interdum, ac porttitor metus
					laoreet. Donec eget bibendum tellus, vitae laoreet lectus.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
					varius tellus sit amet sagittis. In nec elit sodales, ornare nunc sed,
					tristique leo. Donec non lacus sem. Morbi rutrum nec purus non
					facilisis. Donec molestie sagittis efficitur. Etiam nec interdum
					lacus. Donec vel urna quis ex luctus tincidunt non sollicitudin
					sapien. Sed non risus et metus pharetra scelerisque. Pellentesque
					habitant morbi tristique senectus et netus et malesuada fames ac
					turpis egestas. Vestibulum mattis urna mi, at vestibulum libero
					faucibus ac. Cras ultricies nulla a quam interdum, ac porttitor metus
					laoreet. Donec eget bibendum tellus, vitae laoreet lectus.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
					varius tellus sit amet sagittis. In nec elit sodales, ornare nunc sed,
					tristique leo. Donec non lacus sem. Morbi rutrum nec purus non
					facilisis. Donec molestie sagittis efficitur. Etiam nec interdum
					lacus. Donec vel urna quis ex luctus tincidunt non sollicitudin
					sapien. Sed non risus et metus pharetra scelerisque. Pellentesque
					habitant morbi tristique senectus et netus et malesuada fames ac
					turpis egestas. Vestibulum mattis urna mi, at vestibulum libero
					faucibus ac. Cras ultricies nulla a quam interdum, ac porttitor metus
					laoreet. Donec eget bibendum tellus, vitae laoreet lectus.
				</p>
				<h1 id="projects">Projects</h1>
				<h3>Socket Jockey</h3>
				<img src="https://jakethrasher.netlify.app/assets/socketjockey.png"/>
				<p>
					Collaboratively composing music with physics and the collision of time and space. 
					Users can choose a solo or collaborative room where they drag and drop sonically charged
					shapes and control the sounds by adjusting the physics engine. 

				</p>
				<h3>Shame B0t</h3>
				<img src="https://via.placeholder.com/500x350"/>
				<p>
					A Discord bot designed to increase productivity by restricting access to chat 
					channels for a user-specified time limit. Built remotely with a team of four people
					over a four-day sprint.
				</p>
				<h3>Taurus Trading</h3>
				<img src="https://via.placeholder.com/500x350"/>
				<p>
					Taurus Trading is a mock portfolio and stock market research app that implements a live social media feed to gauge market sentiment. I coded the full-stack social media feature in addition to the functions and rendering of the trending stocks feature.
				</p>
				<h3>Nutrizone</h3>
				<img src="https://jakethrasher.netlify.app/assets/nutrizone.png"/>
				<p>
					Nutrizone helps users track their daily caloric intake based on their preferred diet type.
					We provide tabular data and bar charts built with CanvasJS to help the user 
					meet their daily macronutrient goals. Built remotely with a team of four people
					over a four-day sprint using vanilla JavaScript.
				</p>
				<h1 id="contact">Contact</h1>
				<form onSubmit={() => console.log('works')}>
					<input type="text" placeholder="name" />
					<input type="email" placeholder="email" />
					<textarea placeholder="message..." rows="5" cols="60" />
					<button className="form-button">submit</button>
				</form>
			</div>
		</>
	);
};

export default IndexPage;
