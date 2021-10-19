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
				<html lang="en" />
				<title>Patrick Hrabos</title>
				<meta name="description" content="Patrick Hrabo portfolio" />
				<meta name="title" property="og:title" content="Patrick Hrabos" />
				<meta property="og:type" content="Webiste" />
				<meta
					name="image"
					property="og:image"
					content="https://res.cloudinary.com/dyefz2bep/image/upload/v1634616673/Screenshot-20211018210627-2672x1244_aopf5o.png"
				/>
				<meta
					name="description"
					property="og:description"
					content="Patrick Hrabo portfolio"
				/>
				<meta name="author" content="Patrick Hrabos" />
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
