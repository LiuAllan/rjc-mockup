import React from 'react';
import '../styles/StyledPracticeArea.scss';
import Item from './Item';
// import { Link } from 'react-router-dom';

import img1 from '../images/aboutContent/about_company_thumb.jpg'
import img2 from '../images/aboutContent/about_history_thumb.jpg'
import img3 from '../images/aboutContent/about_people_thumb.jpg'
import img4 from '../images/aboutContent/about_locations_thumb.jpg'


const AboutContent = () => (
	<section className="main-container">
		<div className="heading-container">
			<div className="random-square"></div>
			<h1>About</h1>
		</div>

		<div className="item-list">
			{/*Input square components*/}
			<div className="grid-item">
			<a href='/about/company'>
				<Item image={img1} text="Company"/>
			</a>
			</div>
			<div className="grid-item">
				<a href='/about/company#history'>
					<Item image={img2} text="History"/>
				</a>
			</div>
			<div className="grid-item">
				<a href='/about/company#people'>
					<Item image={img3} text="Our People"/>
				</a>
			</div>
			<div className="grid-item">
				<a href='/about/company#locations'>
					<Item image={img4} text="Locations"/>
				</a>
			</div>
		</div>
	</section>
);

export default AboutContent;