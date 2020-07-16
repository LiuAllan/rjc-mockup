import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/parking-structure-restoration.jpg';

export default class parking_structure_restoration extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Parking Structure Restoration</h1>
					</div>

					<div className="body">
						<p>
							RJC Engineers has been providing a full spectrum of restoration solutions for parking structures for over 35 years. Our expertise provides owners with long-lasting, costeffective repairs, tailored to meet their unique restoration needs. Our experts investigate, test and assess parking structures to determine their current condition and provide technically sound solutions to address any potential performance issues that can be caused by the ravaging effects of salt inducted corrosion.
						</p>

						<img src={img} alt='' />

						<h2>State-of-the-art technical expertise providing innovative solutions</h2>
						<p>
							RJC also assists owners with the development of targeted maintenance programs, designed to greatly reduce the potential damage that road salts can inflict on parking structures.<br /><br />

							At RJC, we draw upon our unique blend of expertise in parking structure durability, structural engineering, parking functional design and prime consulting to deliver a focused and comprehensive restoration strategy that will increase the value and extend the service life of our client’s sizable capital investment.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}