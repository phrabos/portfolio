import * as React from 'react';
import { Navbar } from '../components/Navbar';
import resume from '../images/resume.jpg';
import '../styles/resume.css';

const ResumePage = () => {
	return (
		<>
			<Navbar />
			<section className="resume-wrapper">
				<img className="resume" src={resume} alt="resume" />
			</section>
		</>
	);
};

export default ResumePage;
