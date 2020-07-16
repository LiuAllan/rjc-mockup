import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/parking-facility-design96a9a9391b316d6b9fc9ff00001037d2.jpg';

export default class parking_facility_design extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Parking Facility Design</h1>
					</div>

					<div className="body">
						<p>
							Unobstructed sightlines, easily comprehended circulation systems, intuitive wayfinding and user comfort are the hallmarks of Parking Facility Design excellence.  
						</p>

						<img src={img} alt='' />

						<h2>Park your trust in RJC </h2>
						<p>
							Our team of specialists integrates design excellence, efficient functional planning and cost-effective, durable structural design to create exceptional parking facilities. Whether RJC is on your team as the Structural Engineer, Parking Consultant or Prime Consultant, a parking facility that stands the test of time is our focus.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}