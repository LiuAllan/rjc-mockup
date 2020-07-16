import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/bridge-design-and-rehabilitation_web.jpg';

export default class bridge_design_rehabilitation extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Bridge Design & Rehabilitation</h1>
					</div>

					<div className="body">
						<p>
							Bridges play a critical role in society; they connect places and enable the safe passage of people, goods, and vehicles.
						</p>

						<img src={img} alt='' />

						<h2>Bridging any gap</h2>
						<p>
							RJC’s specialists seamlessly blend form and function for all types of bridge structures, from pedestrian bridges over meandering creeks to vehicular bridges over bustling highways. In addition to new structures, we assess and restore all types of bridge structures. Connect with RJC and we’ll help you bridge any gap. 
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}