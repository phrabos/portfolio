import * as React from 'react';
import { Navbar } from '../components/Navbar';
import '../styles/form.css';
import '../styles/global.css';

const IndexPage = () => {
	return (
		<>
			<Navbar />
			<div className="wrapper">
				<h1>Patrick Hrabos</h1>
				<h2>Software Engineer</h2>
				<h1 id="about">About</h1>
				<p>
					I am a software engineer with a background crunching numbers and raising capital as a skilled and accomplished accountant 					where I gained valuable business experience and problem-solving skills.  My passion for coding began as a kid, writing basic 					websites in HTML. I am excited to be able to merge my business knowledge into a career as a software engineer. Outside of work, I 				am an avid runner and by grinding through ultra-endurance feats I have learned lessons in perseverance, discipline, and dedication 				which I have used to take on challenging projects in the workforce. I am on a never-ending quest to learn everything. 

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
				<p>
					A Discord bot designed to increase productivity by restricting access to chat 
					channels for a user-specified time limit. I coded the countdown timer commands and 
					logic, the exit command, and functions to change the users nickname.
				</p>
				<h3>Taurus Trading</h3>
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
				<h3>Nutrizone</h3>
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
