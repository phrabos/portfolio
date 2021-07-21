import * as React from 'react';
import { Navbar } from '../components/Navbar';

// styles
const pageStyles = {
	color: '#232129',
	padding: 96,
	fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
	marginTop: 0,
	marginBottom: 0,
	maxWidth: 320,
};

const sectionStyles = {
	marginTop: 400,
	marginBottom: 400,
	maxWidth: 320,
};

// data

// markup
const IndexPage = () => {
	return (
		<main style={pageStyles}>
			<title>Home Page</title>
			<Navbar />
			<h1 style={headingStyles}>This will be my Gatsby portfolio site...</h1>
			<section style={sectionStyles}>
				<h1 id="about" style={headingStyles}>
					About
				</h1>
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
			<section style={sectionStyles}>
				<h1 style={headingStyles} id="projects">
					Projects
				</h1>
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
			<section style={sectionStyles}>
				<h1 id="contact" style={headingStyles}>
					Contact
				</h1>
				<form onSubmit={() => console.log('works')}>
					<input placeholder="name" />
					<input placeholder="email" />
					<input placeholder="message" />
					<button>submit</button>
				</form>
			</section>
		</main>
	);
};

export default IndexPage;
