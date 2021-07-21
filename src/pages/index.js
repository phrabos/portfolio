import * as React from 'react';
import { Navbar } from '../components/Navbar';
import '../styles/form.css';
import '../styles/global.css';

const IndexPage = () => {
	return (
		<main>
			<title>Home Page</title>
			<Navbar />
			<h1>Patrick Hrabos</h1>
			<h2>Software Engineer</h2>
			<section>
				<h1 id="about">About</h1>
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
			</section>
			<section>
				<h1 id="projects">Projects</h1>
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
			</section>
			<section>
				<h1 id="contact">Contact</h1>
				<form onSubmit={() => console.log('works')}>
					<input type="text" placeholder="name" />
					<input type="email" placeholder="email" />
					<textarea placeholder="message..." rows="5" cols="60" />
					<button className="form-button">submit</button>
				</form>
			</section>
		</main>
	);
};

export default IndexPage;
