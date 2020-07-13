import React from 'react';
import '../styles/StyledPracticeArea.scss';
import Item from './Item';
import { Link } from 'react-router-dom';

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
				<Link to={{ pathname: "/practice-areas/structural-engineering"}}>
					<Item image={img1} text="Structural Engineering"/>
				</Link>
			</div>
			<div className="grid-item">
				<Link to={{ pathname: "/practice-areas/building-science"}}>
					<Item image={img2} text="Building Science"/>
				</Link>
			</div>
			<div className="grid-item">
				<Link to={{ pathname: "/practice-areas/structural-restoration"}} >
					<Item image={img3} text="Structural Restoration"/>
				</Link>
			</div>
			<div className="grid-item">
				<Link to={{ pathname: 'practice-areas/structural-glass-engineering'}}>
					<Item image={img4} text="Structural Glass Engineering"/>
				</Link>
			</div>
			<div className="grid-item">
				<Link to={{ pathname: '/practice-areas/parking-facility-design'}}>
					<Item image={img5} text="Parking Facility Design"/>
				</Link>
			</div>
			<div className="grid-item">
				<Link to={{ pathname: '/practice-areas/audits-studies'}}>
					<Item image={img6} text="Audits and Studies"/>
				</Link>
			</div>
		</div>
	</section>
);

export default PracticeAreaContent;