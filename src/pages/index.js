import * as React from 'react';
import Helmet from 'react-helmet';
import { Bio } from '../components/Bio';
import { Contact } from '../components/Contact';
import { Navbar } from '../components/Navbar';
import { Top } from '../components/Top';
import '../styles/global.css';
import { UpArrow } from '../components/UpArrow';
import { ProjectList } from '../components/ProjectList';

const IndexPage = () => {
	return (
		<>
			<Helmet>
				<title>Patrick Hrabos</title>
			</Helmet>
			<Navbar />
			<main id="top">
				<Top />
				<UpArrow />
				<ProjectList />
				<Bio />
				<Contact />
			</main>
		</>
	);
};

export default IndexPage;
