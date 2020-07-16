import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/roof-consulting_web.jpg';

export default class roofs_plaza_decks extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Roofs & Plaza Decks</h1>
					</div>

					<div className="body">
						<p>
							A roof may be largely out of sight, but its design, construction, and maintenance are critical to your building’s operation. 
						</p>

						<img src={img} alt='' />

						<h2>Quality consultation </h2>
						<p>
							Is a localized roof repair sufficient or is it time for a more widespread replacement? We’ll help you determine the way forward.<br /><br />

RJC has been providing Roof Consulting for commercial, institutional, industrial, and residential clients throughout Canada. Our team actively participates in the roofing community through provincial roofing associations and consultant institutes such as RCI, Inc. We oversee new and roofing restoration projects of all sizes, from a few to many thousand square feet.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}