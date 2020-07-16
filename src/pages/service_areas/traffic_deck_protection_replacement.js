import React from 'react';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import '../../styles/StyledInfo.scss';

import img from '../../images/serviceAreas/info/traffic-deck-protection-replacement.jpg';

export default class traffic_deck_protection_replacement extends React.Component {
	render()
	{
		return(
			<>
				<Header />
				<section className="main-container">
					<div className="heading-container">
						<div className="random-square"></div>
						<h1>Traffic Deck Protection & Replacement</h1>
					</div>

					<div className="body">
						<p>
							Vehicular traffic deck protection for suspended parking slabs protect the structure against leakage and deterioration from the harmful effects of de-icing salts.
						</p>

						<img src={img} alt='' />

						<h2>Choose the right system to protect your structure</h2>
						<p>
							In today’s marketplace, there is a wide selection of traffic deck protection systems available. Each features a variety of characteristics in terms of performance, design, cost, service-life and maintenance requirements.<br /><br />

RJC has been testing, specifying and evaluating the in situ performance of traffic deck protection systems for over three decades. We draw on our extensive experience and demanding quality control process to select the best traffic deck protection system for a given set of criteria and conditions. RJC then applies our unique combination of expertise in parking structure durability, structural engineering, parking facility design and parking garage restoration to design and detail an overall system that will safeguard your parking structure for years to come.
						</p>

					</div>
				</section>
				<Footer />
			</>
		);
	}
}