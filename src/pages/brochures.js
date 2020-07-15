import React from 'react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import '../styles/StyledPracticeArea.scss';
import Item from '../components/Item';

import img1 from '../images/brochures/services-guide_tile_gradien.jpg';
import img2 from '../images/brochures/sustainability_tile_gradient9f12ac391b316d6b9fc9ff00001037d2.jpg';
import img3 from '../images/brochures/wood-design_brochure-tile_gradient.jpg';
import img4 from '../images/brochures/steel_brochure-tile_gradient.jpg';
import img5 from '../images/brochures/heritage-conservation_brochure-tile_gradient.jpg'
import img6 from '../images/brochures/structural-glass_brochure-tile_gradient2b55a7391b316d6b9fc9ff00001037d2.jpg'
import img7 from '../images/brochures/bridge-design-rehabilitation-tile.jpg'

export default class brochures extends React.Component {
	render()
	{
		return(
			<>
				<Header />
					<section className="main-container">
						<div className="heading-container">
							<div className="random-square"></div>
							<h1>Brochures</h1>
						</div>

						<div className="item-list">
							{/*Input square components*/}
							<div className="grid-item">
							<a href='https://www.rjc.ca/docs/default-source/staff-contact-cards/engineering-services-guide_brochure.pdf?sfvrsn=0'>
								<Item image={img1} text="Engineering Services Guide"/>
							</a>
							</div>
							<div className="grid-item">
								<a href='https://www.rjc.ca/docs/default-source/staff-contact-cards/sustainability-brochure4f9eaf391b316d6b9fc9ff00001037d2.pdf?sfvrsn=0'>
									<Item image={img2} text="Sustainable Design"/>
								</a>
							</div>
							<div className="grid-item">
								<a href='https://www.rjc.ca/docs/default-source/staff-contact-cards/wood-design-brochure359eaf391b316d6b9fc9ff00001037d2.pdf?sfvrsn=0'>
									<Item image={img3} text="Wood Design"/>
								</a>
							</div>
							<div className="grid-item">
								<a href='https://www.rjc.ca/docs/default-source/staff-contact-cards/steel-brochure989eaf391b316d6b9fc9ff00001037d2.pdf?sfvrsn=0'>
									<Item image={img4} text="Steel Structures"/>
								</a>
							</div>
							<div className="grid-item">
								<a href='https://www.rjc.ca/docs/default-source/staff-contact-cards/heritage-brochure1a9eaf391b316d6b9fc9ff00001037d2.pdf?sfvrsn=0'>
									<Item image={img5} text="Heritage Restoration"/>
								</a>
							</div>
							<div className="grid-item">
								<a href='https://www.rjc.ca/docs/default-source/staff-contact-cards/structural-glass-brochure679eaf391b316d6b9fc9ff00001037d2.pdf?sfvrsn=0'>
									<Item image={img6} text="Structural Glass"/>
								</a>
							</div>
							<div className="grid-item">
								<a href='https://www.rjc.ca/docs/default-source/staff-contact-cards/bridge-design-rehabilitation-brochure7f9eaf391b316d6b9fc9ff00001037d2.pdf?sfvrsn=0'>
									<Item image={img7} text="Bridge Design & Rehabilitation"/>
								</a>
							</div>							
						</div>
					</section>
				<Footer />
			</>
		);
	}
}