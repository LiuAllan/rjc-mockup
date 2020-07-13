import React from 'react';
import '../styles/StyledPracticeArea.scss';
import Item from './Item';

import img1 from '../images/practiceAreas/_structural-engineering_thumb.jpg'
import img2 from '../images/practiceAreas/_building-science_thumb.jpg'
import img3 from '../images/practiceAreas/_structural-restoration_thumb.jpg'
import img4 from '../images/practiceAreas/_structural-glass-and-facade-engineering_thumb.jpg'
import img5 from '../images/practiceAreas/parking-facility-design_thumb90aba9391b316d6b9fc9ff00001037d2.jpg'
import img6 from '../images/practiceAreas/_audits-and-studies_thumb.jpg'


const PracticeAreaContent = () => (
	<section className="main-container">
		<div className="heading-container">
			<div className="random-square"></div>
			<h1>Services</h1>
		</div>

		<div className="item-list">
			{/*Input square components*/}
			<div className="grid-item">
				<Item image={img1} text="Structural Engineering"/>
			</div>
			<div className="grid-item">
				<Item image={img2} text="Building Science"/>
			</div>
			<div className="grid-item">
				<Item image={img3} text="Structural Restoration"/>
			</div>
			<div className="grid-item">
				<Item image={img4} text="Structural Glass Engineering"/>
			</div>
			<div className="grid-item">
				<Item image={img5} text="Parking Facility Design"/>
			</div>
			<div className="grid-item">
				<Item image={img6} text="Audits and Studies"/>
			</div>
		</div>
	</section>
);

export default PracticeAreaContent;