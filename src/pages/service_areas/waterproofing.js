import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/waterproofing_web.jpg';

export default class waterproofing extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Waterproofing</h1>
					</div>

					<div className="body">
						<p>
							Protecting your structure from the damaging effects of water is about obtaining the right advice from the right specialist.
						</p>

						<img src={img} alt='' />

						<h2>The proof is in the system</h2>
						<p>
							Whether your project involves a leak investigation of an existing assembly or the design of a new system, our specialists are proficient in the technological advances in waterproofing materials and systems. Our wide base of experience in assessing damage caused by water penetration and our understanding of the durability of various assemblies enables us to provide practical solutions  that meet our clients’ specific needs.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}