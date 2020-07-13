import React from 'react';
import '../styles/StyledPracticeArea.scss';
import Item from './Item';

import img1 from '../images/serviceAreas/img1.jpg';
import img2 from '../images/serviceAreas/img2.jpg';
import img3 from '../images/serviceAreas/img3.jpg';
import img4 from '../images/serviceAreas/img4.jpg';
import img5 from '../images/serviceAreas/img5.jpg';
import img6 from '../images/serviceAreas/img6.jpg';
import img7 from '../images/serviceAreas/img7.jpg';
import img8 from '../images/serviceAreas/img8.jpg';
import img9 from '../images/serviceAreas/img9.jpg';
import img10 from '../images/serviceAreas/img10.jpg';
import img11 from '../images/serviceAreas/img11.jpg';
import img12 from '../images/serviceAreas/img12.jpg';
import img13 from '../images/serviceAreas/img13.jpg';
import img14 from '../images/serviceAreas/img14.jpg';
import img15 from '../images/serviceAreas/img15.jpg';
import img16 from '../images/serviceAreas/img16.jpg';
import img17 from '../images/serviceAreas/img17.jpg';
import img18 from '../images/serviceAreas/img18.jpg';
import img19 from '../images/serviceAreas/img19.jpg';
import img20 from '../images/serviceAreas/img20.jpg';
import img21 from '../images/serviceAreas/img21.jpg';
import img22 from '../images/serviceAreas/img22.jpg';
import img23 from '../images/serviceAreas/img23.jpg';
import img24 from '../images/serviceAreas/img24.jpg';
import img25 from '../images/serviceAreas/img25.jpg';
import img26 from '../images/serviceAreas/img26.jpg';


const ServiceAreaContent = () => (
	<section className="main-container">
		<div className="heading-container">
			<div className="random-square"></div>
			<h1>Services</h1>
		</div>

		<div className="item-list">
			{/*Input square components*/}
			<div className="grid-item">
				<Item image={img1} text="Bridge Design & Rehabilitation"/>
			</div>
			<div className="grid-item">
				<Item image={img2} text="Building Enclosures"/>
			</div>
			<div className="grid-item">
				<Item image={img3} text="Cold-Formed Steel Design"/>
			</div>
			<div className="grid-item">
				<Item image={img4} text="Condition Assessments"/>
			</div>
			<div className="grid-item">
				<Item image={img5} text="Depreciation Reports & Reserve Fund Studies"/>
			</div>
			<div className="grid-item">
				<Item image={img6} text="Facade Engineering"/>
			</div>
			<div className="grid-item">
				<Item image={img7} text="Fall Protection & Travel Restraint"/>
			</div>
			<div className="grid-item">
				<Item image={img8} text="Forensic Engineering"/>
			</div>
			<div className="grid-item">
				<Item image={img9} text="Heritage Conservation"/>
			</div>
			<div className="grid-item">
				<Item image={img10} text="Parking Facility Design"/>
			</div>
			<div className="grid-item">
				<Item image={img11} text="Parking Structure Restoration"/>
			</div>
			<div className="grid-item">
				<Item image={img12} text="Pavement Rehabilitation"/>
			</div>
			<div className="grid-item">
				<Item image={img13} text="Performance Assessment"/>
			</div>
			<div className="grid-item">
				<Item image={img14} text="Post-Tensioned Concrete"/>
			</div>
			<div className="grid-item">
				<Item image={img15} text="Prime Consulting"/>
			</div>
			<div className="grid-item">
				<Item image={img16} text="Rendering & Interactive Visualization"/>
			</div>
			<div className="grid-item">
				<Item image={img17} text="Roofs & Plaza Decks"/>
			</div>
			<div className="grid-item">
				<Item image={img18} text="Seismic Risk Mitigation"/>
			</div>
			<div className="grid-item">
				<Item image={img19} text="Specialty & Supplementary Engineering"/>
			</div>
			<div className="grid-item">
				<Item image={img20} text="Structual Engineering"/>
			</div>
			<div className="grid-item">
				<Item image={img21} text="Structual Glass Engineering"/>
			</div>
			<div className="grid-item">
				<Item image={img22} text="Structural Restoration"/>
			</div>
			<div className="grid-item">
				<Item image={img23} text="Sustainable Design"/>
			</div>
			<div className="grid-item">
				<Item image={img24} text="Traffic Deck Protection & Replacement"/>
			</div>
			<div className="grid-item">
				<Item image={img25} text="Waterproofing"/>
			</div>	
			<div className="grid-item">
				<Item image={img26} text="Wood Design"/>
			</div>	
		</div>
	</section>
);

export default ServiceAreaContent;